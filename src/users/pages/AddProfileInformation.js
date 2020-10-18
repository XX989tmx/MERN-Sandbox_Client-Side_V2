import React, { useContext } from "react";
import Button from "../../shared/components/FormElements/Button";
import { useHistory } from "react-router-dom";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import Axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";

const AddProfileInformation = () => {
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

  const profileInformationSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await Axios.post(
        process.env.REACT_APP_BACKEND_URL +
          `/users/addProfileToUser/${auth.userId}`,
        {
          nickname: formState.inputs.nickname.value,
          introduce_yourself: formState.inputs.introduce_yourself.value,
          state: formState.inputs.state.value,
          city: formState.inputs.city.value,
          things_you_likes: formState.inputs.things_you_likes.value,
          things_you_hates: formState.inputs.things_you_hates.value,
          school: formState.inputs.school.value,
          company: formState.inputs.company.value,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>add profile information</h2>
      <div>
        <form action="">
          <Input
            id="nickname"
            element="input"
            type="text"
            label="nickname"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid nickname."
            onInput={inputHandler}
          />
          <Input
            id="introduce_yourself"
            element="textarea"
            label="introduce yourself"
            placeholder="Write your introductory text"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid text (at least 5 characters)."
            onInput={inputHandler}
          />
          <Input
            id="state"
            element="input"
            type="text"
            label="country"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid country."
            onInput={inputHandler}
          />
          <Input
            id="city"
            element="input"
            type="text"
            label="City"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid City."
            onInput={inputHandler}
          />
          <Input
            id="things_you_likes"
            element="input"
            type="text"
            label="Things You Likes"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid text."
            onInput={inputHandler}
          />
          <Input
            id="things_you_hates"
            element="input"
            type="text"
            label="Things you Hates"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid text."
            onInput={inputHandler}
          />
          <Input
            id="school"
            element="input"
            type="text"
            label="School"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid text."
            onInput={inputHandler}
          />
          <Input
            id="company"
            element="input"
            type="text"
            label="Company"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid text."
            onInput={inputHandler}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default AddProfileInformation;
