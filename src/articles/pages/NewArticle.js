import React, {useContext} from "react";
import { useHistory} from 'react-router-dom';

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
import { AuthContext } from '../../shared/context/auth-context';

const NewArticle = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: { value: "", isValid: false },
      content: { value: "", isValid: false },
      address: { value: "", isValid: false },
    },
    false
  );

  const history = useHistory();

  const articleSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
      "http://localhost:5000/api/articles",
      "POST",
      JSON.stringify({
        title: formState.inputs.title.value,
        content: formState.inputs.content.value,
        address: formState.inputs.address.value,
        author: auth.userId
      }),
      { 'Content-Type': 'application/json'}
    );
    history.push('/');
    } catch (err) {
      
    }

    
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="article-form" onSubmit={articleSubmitHandler}>
      {isLoading && <LoadingSpinner asOverlay/>}
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
    </React.Fragment>
  );
};

export default NewArticle;
