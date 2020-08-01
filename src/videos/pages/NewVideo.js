import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";


const NewVideo = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
      {
        title: { value: "", isValid: false },
        description: { value: "", isValid: false },
        persons: { value: "", isValid: false },
        src: { value: null, isValid: false },
        tags: { value: "", isValid: false },
        categories: { value: "", isValid: false },
      },
      false
    );

    const history = useHistory();

    const newVideoSubmitHandler = async(event) => {
        event.preventDefault();
        
        try {
            // const formData = new FormData();
            // formData.append("title", formState.inputs.title.value);
            // formData.append("description", formState.inputs.description.value);
            // formData.append("persons", formState.inputs.persons.value);
            // formData.append("src", formState.inputs.src.value);
            // formData.append("tags", formState.inputs.tags.value);
            // formData.append("categories", formState.inputs.categories.value);
            
            const responseData = await sendRequest(
              process.env
                .REACT_APP_BACKEND_URL + `/videos/new`,
              "POST",
              JSON.stringify({
                title: formState.inputs.title.value,
                description: formState.inputs.description.value,
                persons: formState.inputs.persons.value,
                src: formState.inputs.src.value,
                tags: formState.inputs.tags.value,
                categories: formState.inputs.categories.value,
              }),
              { "Content-Type": "application/json" }
            );

            console.log(responseData);
            history.push("/videos/main");
           
        } catch (error) {
            
        }
    };

    return (
      <div>
        <form onSubmit={newVideoSubmitHandler}>
          <Input
            id="title"
            element="input"
            label="title"
            placeholder="title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
            onInput={inputHandler}
          />
          <Input
            id="description"
            element="input"
            label="description"
            placeholder="description"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
            onInput={inputHandler}
          />
          <Input
            id="persons"
            element="input"
            label="persons"
            placeholder="persons"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
            onInput={inputHandler}
          />
          <Input
            id="src"
            element="input"
            label="src"
            placeholder="src(emmbded video url)"
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
            id="categories"
            element="input"
            label="categories"
            placeholder="categories"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            ADD NEW VIDEO
          </Button>
        </form>
      </div>
    );
}

export default NewVideo;
