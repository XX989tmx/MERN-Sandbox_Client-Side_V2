import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

import "./UpdateVideo.css";

const UpdateVideo = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const videoId = useParams().videoId;
  const history = useHistory();
  const [LoadedVideo, setLoadedVideo] = useState();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
      persons: { value: "", isValid: false },
    },
    false
  );

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/videos/${videoId}`
        );
        setLoadedVideo(responseData.video);

        setFormData(
          {
            title: {
              value: responseData.video.title,
              isValid: true,
            },
            description: {
              value: responseData.video.description,
              isValid: true,
            },
            content: {
              value: responseData.video.persons,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchVideo();
  }, [sendRequest, videoId, setFormData]);

  const videoUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/videos/${videoId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          persons: formState.inputs.persons.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      history.push("/videos/main");
    } catch (err) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!LoadedVideo && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find video!</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && LoadedVideo && (
        <div className="updateVideo-container">
          <div className="main-container">
            <form onSubmit={videoUpdateSubmitHandler}>
              <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={LoadedVideo.title}
                initialValid={true}
              />
              <Input
                id="description"
                element="textarea"
                // type="text"
                label="description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={inputHandler}
                initialValue={LoadedVideo.description}
                initialValid={true}
              />
              <Input
                id="persons"
                element="text"
                // type="text"
                label="persons"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid persons."
                onInput={inputHandler}
                initialValue={LoadedVideo.persons}
                initialValid={true}
              />
              <Button btnBlack type="submit" disabled={!formState.isValid}>
                UPDATE VIDEO
              </Button>
            </form>
          </div>
          {/* <div className="side-container"></div> */}
        </div>
      )}
    </React.Fragment>
  );
};

export default UpdateVideo;
