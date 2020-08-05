import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./ArticleForm.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";

const NewArticle = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: { value: "", isValid: false },
      content: { value: "", isValid: false },
      address: { value: "", isValid: false },
      image: { value: null, isValid: false },
      // address: { value: "", isValid: false },
      categories: { value: "", isValid: false },
      tags: { value: "", isValid: false },
      price: { value: null, isValid: false },
    },
    false
  );

  // const [submitCount, setSubmitCount] = useState(0);

  const history = useHistory();

  const articleSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("content", formState.inputs.content.value);
      formData.append("address", formState.inputs.address.value);
      formData.append("author", auth.userId);
      formData.append("image", formState.inputs.image.value);
      formData.append("categories", formState.inputs.categories.value);
      formData.append("tags", formState.inputs.tags.value);
      formData.append("price", formState.inputs.price.value);

      await sendRequest(process.env.REACT_APP_BACKEND_URL + "/articles", "POST", formData, {
        Authorization: 'Bearer ' + auth.token
      });
        history.push(`/${auth.userId}/articles`);
    } catch (err) {}

    // setSubmitCount(prev => prev+=1);
  };


  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="container">
        <div className="main-container">
          <form
            className="article-form card-box"
            onSubmit={articleSubmitHandler}
          >
            {isLoading && <LoadingSpinner asOverlay />}
            <Input
              id="title"
              element="input"
              type="text"
              label="Title"
              placeholder="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid title."
              onInput={inputHandler}
            />
            <Input
              id="content"
              element="textarea"
              label="content"
              placeholder="Write your content here"
              validators={[VALIDATOR_MINLENGTH(5)]}
              errorText="Please enter a valid content (at least 5 characters)."
              onInput={inputHandler}
            />
            <Input
              id="address"
              element="input"
              label="Address"
              placeholder="Address"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="categories"
              element="input"
              label="categories"
              placeholder="categories"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="tags"
              element="input"
              label="tags"
              placeholder="tags"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <Input
              id="price"
              element="input"
              label="price"
              placeholder="price"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a valid address."
              onInput={inputHandler}
            />
            <ImageUpload
              id="image"
              onInput={inputHandler}
              errorText="Please provide an image."
            />
            {/* <Input element="input" type="radio" label="radio" placeholder="radio" />
        <Input element="input" type="email" label="email" placeholder="email" />
        <Input
          element="input"
          type="password"
          label="password"
          placeholder="password"
        />
        <Input
          element="input"
          type="checkbox"
          label="checkbox"
          placeholder="checkbox"
        /> */}
            <Button type="submit" disabled={!formState.isValid}>
              ADD ARTICLE
            </Button>
          </form>
        </div>
        <div className="side-container"></div>
      </div>
    </React.Fragment>
  );
};

export default NewArticle;
