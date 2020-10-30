import React, { useContext, useEffect } from "react";
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
import CountryListSelector from "../components/CountryListSelector";
import { useState } from "react";
import TodoufukenArray from "../components/TodoufukenArray";
import Axios from "axios";

const CreateAddress = () => {
  const [ZipCode1, setZipCode1] = useState("");
  const [ZipCode2, setZipCode2] = useState("");
  const [Country, setCountry] = useState("");
  const [TodoufukenOption, setTodoufukenOption] = useState([]);
  const [TodoufukenValue, setTodoufukenValue] = useState("");
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

  useEffect(() => {
    const fetch = (params) => {
      const todoufukenOptions = TodoufukenArray.map((v, i) => {
        return (
          <option key={i} value={v}>
            {v}
          </option>
        );
      });
      setTodoufukenOption(todoufukenOptions);
    };

    fetch();
  }, []);

  const zipCode1ChangeHandler = (event) => {
    const zipCode1 = event.target.value;
    console.log(zipCode1);
    setZipCode1(zipCode1);
  };

  const zipCode2ChangeHandler = (event) => {
    const zipCode2 = event.target.value;
    console.log(zipCode2);
    setZipCode2(zipCode2);
  };

  const countryListChangeHandler = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  };

  const todoufukenChangeHandler = (event) => {
    const todoufukenV = event.target.value;
    console.log(todoufukenV);
    setTodoufukenValue(todoufukenV);
  };

  const addressInformationSubmitHandler = async (event) => {
    event.preventDefault();
    const zipCodeValue = ZipCode1 + ZipCode2;
    console.log(zipCodeValue);
    const countryValue = Country;
    console.log(countryValue);
    const todoufukenValue = TodoufukenValue;
    console.log(todoufukenValue);
    const data = {
      zip_code: zipCodeValue,
      country: countryValue,
      todoufuken: todoufukenValue,
      name: formState.inputs.name.value,
      address_info1: formState.inputs.address_info1.value,
      address_info2: formState.inputs.address_info2.value,
      phone_number: formState.inputs.phone_number.value,
      email: formState.inputs.email.value,
      company: formState.inputs.company.value,
    };
    console.log(data);
    let response;
    try {
      response = await Axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/createAddress/${auth.userId}`,
        data
      );
    } catch (error) {
      console.log(error);
    }

    history.push(`/${auth.userId}/address`);
  };

  return (
    <div>
      <h1>create address</h1>

      <div className="address-form-area">
        <form action="" onSubmit={addressInformationSubmitHandler}>
          <CountryListSelector
            countryListChangeHandler={countryListChangeHandler}
          />
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
            <input
              id="zip_code1"
              type="text"
              value={ZipCode1}
              onChange={zipCode1ChangeHandler}
            />
            -
            <input
              id="zip_code2"
              type="text"
              value={ZipCode2}
              onChange={zipCode2ChangeHandler}
            />
            <span>required</span>
          </div>
          <div>
            <select
              name=""
              id="todoufukenSelector"
              onChange={todoufukenChangeHandler}
            >
              <option value="">chose todoufuken</option>
              {TodoufukenOption}
            </select>
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
