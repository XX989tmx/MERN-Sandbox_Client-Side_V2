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
    return (
        <div>
            <h1>update profile</h1>
        </div>
    );
}

export default UpdateProfile;
