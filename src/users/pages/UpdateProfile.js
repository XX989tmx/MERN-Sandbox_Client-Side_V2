import Axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Input from "../../shared/components/FormElements/Input";
import { AuthContext } from "../../shared/context/auth-context";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
const UpdateProfile = () => {
    const auth = useContext(AuthContext);
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

    const history = useHistory();

    const updateProfileSubmitHandler = async(event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>update profile</h1>
        </div>
    );
}

export default UpdateProfile;
