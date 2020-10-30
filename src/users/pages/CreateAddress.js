import React, { useContext } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
import { useForm } from "../../shared/hooks/form-hook";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import { useHistory } from "react-router-dom";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const CreateAddress = () => {
  const auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
      name: { value: "", isValid: false },
      address_info1: { value: "", isValid: false },
      address_info2: { value: "", isValid: false },
      phone_number: { value: "", isValid: false },
      email: { value: "", isValid: false },
      company: { value: "", isValid: false },
    },
    false
  );

  const history = useHistory();

  return (
    <div>
      <h1>create address</h1>

      <div className="address-form-area">
        <form action="">
          <Input
            id="name"
            element="input"
            type="text"
            label="name"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name."
            onInput={inputHandler}
          />{" "}
          <span>required</span>
          <div>
            {" "}
            <span>zip code</span>
            <input type="text" />
            -
            <input type="text" />
            <span>required</span>
          </div>
          <Input
            id="address_info1"
            element="input"
            type="text"
            label="address_info1"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
            onInput={inputHandler}
          />
          <span>required</span>
          <Input
            id="address_info2"
            element="input"
            type="text"
            label="address_info2"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
            onInput={inputHandler}
          />{" "}
          <span>optional</span>
          <Input
            id="phone_number"
            element="input"
            type="number"
            label="phone_number"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid phone number."
            onInput={inputHandler}
          />
          <span>required</span>
          <Input
            id="email"
            element="input"
            type="email"
            label="email"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid phone email."
            onInput={inputHandler}
          />
          <span>required</span>
          <Input
            id="company"
            element="input"
            type="company"
            label="company"
            placeholder="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid company name."
            onInput={inputHandler}
          />{" "}
          <span>optional</span>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateAddress;
