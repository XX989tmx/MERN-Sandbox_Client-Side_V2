import React, { useContext, useEffect } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";
import { useForm } from "../../shared/hooks/form-hook";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import { useHistory, useParams } from "react-router-dom";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import CountryListSelector from "../components/CountryListSelector";
import { useState } from "react";
import TodoufukenArray from "../components/TodoufukenArray";
import Axios from "axios";

const UpdateAddress = () => {
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
  const addressId = useParams().addressId;
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
      response = await Axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/users/updateAddress/${auth.userId}/${addressId}`,
        data
      );
    } catch (error) {
      console.log(error);
    }

    history.push(`/${auth.userId}/address`);
  };
  return (
    <React.Fragment>
      <div
        className="create-address-container"
        style={{ width: "960px", height: "100vh", margin: "auto" }}
      >
        <div style={{ padding: "10px 180px 10px 180px" }}>
          <h1>Update Address</h1>

          <div className="address-form-area">
            <form action="" onSubmit={addressInformationSubmitHandler}>
              <div>
                {" "}
                <span>Country and Region</span>{" "}
                <span style={{ color: "red" }}>(*Required)</span>
                <CountryListSelector
                  countryListChangeHandler={countryListChangeHandler}
                />
              </div>
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <span>Name</span>{" "}
                <span style={{ color: "red" }}>(*Required)</span>{" "}
                <Input
                  id="name"
                  element="input"
                  type="text"
                  placeholder="Your name"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid name."
                  onInput={inputHandler}
                />{" "}
              </div>

              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                {" "}
                <span>Zip Code</span>{" "}
                <span style={{ color: "red" }}>(*Required)</span>
                <div>
                  <input
                    id="zip_code1"
                    type="text"
                    placeholder="000"
                    value={ZipCode1}
                    onChange={zipCode1ChangeHandler}
                    style={{ width: "200px", height: "30px" }}
                  />
                  -
                  <input
                    id="zip_code2"
                    type="text"
                    placeholder="0000"
                    value={ZipCode2}
                    onChange={zipCode2ChangeHandler}
                    style={{ width: "200px", height: "30px" }}
                  />
                </div>
              </div>
              <div style={{ marginTop: "20px", marginBottom: "10px" }}>
                <span>Todoufuken</span>{" "}
                <span style={{ color: "red" }}>(*Required)</span>
                <select
                  name=""
                  id="todoufukenSelector"
                  onChange={todoufukenChangeHandler}
                  style={{
                    width: "600px",
                    height: "30px",
                    color: "black",
                    boxShadow: "0px 1px 7px grey",
                  }}
                >
                  <option value="">chose todoufuken</option>
                  {TodoufukenOption}
                </select>
              </div>
              <div>
                <span>Address1</span>{" "}
                <span style={{ color: "red" }}>(*Required)</span>
                <Input
                  id="address_info1"
                  element="input"
                  type="text"
                  placeholder="shinzyukuku example chyou 9-99-99"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid address."
                  onInput={inputHandler}
                />
              </div>
              <div>
                {" "}
                <span>Address2</span>{" "}
                <span style={{ color: "red" }}>(*Required)</span>
                <Input
                  id="address_info2"
                  element="input"
                  type="text"
                  placeholder="example building 789"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid address."
                  onInput={inputHandler}
                />{" "}
              </div>
              <div>
                {" "}
                <span>Phone Number</span>{" "}
                <span style={{ color: "red" }}>(*Required)</span>
                <Input
                  id="phone_number"
                  element="input"
                  type="number"
                  placeholder="99999999999 (do not use -)"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid phone number."
                  onInput={inputHandler}
                />
              </div>
              <div>
                {" "}
                <span>Email</span>{" "}
                <span style={{ color: "red" }}>(*Required)</span>
                <Input
                  id="email"
                  element="input"
                  type="email"
                  placeholder="example@gmail.com"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid phone email."
                  onInput={inputHandler}
                />
              </div>
              <div>
                {" "}
                <span>Company</span>{" "}
                <span style={{ color: "red" }}>(*Required)</span>
                <Input
                  id="company"
                  element="input"
                  type="company"
                  placeholder="Your Company"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid company name."
                  onInput={inputHandler}
                />{" "}
              </div>
              <Button btnBlack type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <MoveToTopButton />
      <FooterMainNavigation />
    </React.Fragment>
  );
};

export default UpdateAddress;
