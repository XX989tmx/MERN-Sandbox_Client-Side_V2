import React from 'react';

import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './NewArticle.css';
import Input from '../../shared/components/FormElements/Input';

const NewArticle = () => {
    return (
      <form className="article-form">
        <Input
          element="input"
          type="text"
          label="Title"
          placeholder="text"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
        />
        <Input element="input" type="radio" label="radio" placeholder="radio" />
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
        />
      </form>
    );
};

export default NewArticle;