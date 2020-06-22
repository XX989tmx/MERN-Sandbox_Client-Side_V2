import React from "react";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./ArticleForm.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";

const NewArticle = () => {
  const [formState, inputHandler] = useForm(
    {
      title: { value: "", isValid: false },
      content: { value: "", isValid: false },
      author: { value: "", isValid: false }
    },
    false
  );

  

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="article-form" onSubmit={placeSubmitHandler}>
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
        id="author"
        element="input"
        label="Author"
        placeholder="Your name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Name."
        onInput={inputHandler}
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
  );
};

export default NewArticle;
