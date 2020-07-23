import React, { useContext, useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";

const UserDetailInfo = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;
  console.log(userId);
  const history = useHistory();

  const [formState, inputHandler] = useForm(
    {
      country: { value: "", isValid: false },
      zip_code: { value: "", isValid: false },
      todoufuken: { value: "", isValid: false },
      shichousonku: { value: "", isValid: false },
      banchi: { value: "", isValid: false },
      name_of_residence: { value: "", isValid: false },
      phone_number: { value: "", isValid: false },
    },
    false
  );

  const userDetailInfoSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      // const formData = new FormData();

      // formData.append("country", formState.inputs.country.value);
      // formData.append("zip_code", formState.inputs.zip_code.value);
      // formData.append("todoufuken", formState.inputs.todoufuken.value);
      // formData.append("shichousonku", formState.inputs.shichousonku.value);
      // formData.append("banchi", formState.inputs.banchi.value);
      // formData.append("name_of_residence", formState.inputs.name_of_residence.value);
      // formData.append("phone_number", formState.inputs.phone_number.value);

        // console.log(formData.values());

      const responseData = await sendRequest(
        `http://localhost:5000/api/users/${userId}/user_detail_info/create`,
        "POST",
        JSON.stringify({
          country: formState.inputs.country.value,
          zip_code: formState.inputs.zip_code.value,
          todoufuken: formState.inputs.todoufuken.value,
          shichousonku: formState.inputs.shichousonku.value,
          banchi: formState.inputs.banchi.value,
          name_of_residence: formState.inputs.name_of_residence.value,
          phone_number: formState.inputs.phone_number.value,
        }),
        { "Content-Type": "application/json" }
        // {
        //   Authorization: "Bearer " + auth.token,
        // }
      );
      
      console.log(responseData);
      console.log(`your country is ${responseData.country}`);
        history.push("/" + auth.userId + "/user_detail_info/show");
    } catch (error) {
      console.log(error);
    }
  };

  // formData.append("zip_code", formState.inputs.zip_code.value);
  // formData.append("todoufuken", formState.inputs.todoufuken.value);
  // formData.append("shichousonku", formState.inputs.shichousonku.value);
  // formData.append("banchi", formState.inputs.banchi.value);
  // formData.append(
  //   "name_of_residence",
  //   formState.inputs.name_of_residence.value
  // );
  // formData.append("phone_number", formState.inputs.phone_number.value);
  // formData.append("user_id", auth.userId);

  

  return (
    <div>
      user_detail_info
      <form onSubmit={userDetailInfoSubmitHandler}>
        <Input
          id="country"
          element="input"
          label="country"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler} 
        />
        <Input
          id="zip_code"
          element="input"
          label="zip_code"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id="todoufuken"
          element="input"
          label="todoufuken"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id="shichousonku"
          element="input"
          label="shichousonku"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id="banchi"
          element="input"
          label="banchi"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id="name_of_residence"
          element="input"
          label="name_of_residence"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id="phone_number"
          element="input"
          label="phone_number"
          type="text"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
};

export default UserDetailInfo;
