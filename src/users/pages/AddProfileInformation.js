import React from "react";
import Button from "../../shared/components/FormElements/Button";
import { useHistory } from "react-router-dom";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";

const AddProfileInformation = () => {
  const [formState, inputHandler] = useForm(
    {
      nickname: { value: "", isValid: false },
      introduce_yourself: { value: "", isValid: false },
      state: { value: "", isValid: false },
      city: { value: "", isValid: false },
      things_you_likes: { value: "", isValid: false },
      things_you_hates: { value: "", isValid: false },
      school: { value: "", isValid: false },
      company: { value: "", isValid: false },
    },
    false
  );

  return (
    <div>
      <h2>add profile information</h2>
      <div>
        <form action="">
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
            id="title"
            element="input"
            type="text"
            label="Title"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default AddProfileInformation;
