import React, { useContext, useState, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";

import './UpdateUserDetailInfo.css';

const UpdateUserDetailInfos = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;
  console.log(userId);
  const history = useHistory();

  const [LoadedCountry, setLoadedCountry] = useState();
  const [LoadedZipcode, setLoadedZipcode] = useState();
  const [LoadedTodofuken, setLoadedTodofuken] = useState();
  const [LoadedShichousonku, setLoadedShichousonku] = useState();
  const [LoadedBanchi, setLoadedBanchi] = useState();
  const [LoadedNameOfResidence, setLoadedNameOfResidence] = useState();
  const [LoadedPhoneNumber, setLoadedPhoneNumber] = useState();

  const [formState, inputHandler, setFormData] = useForm(
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

  useEffect(() => {
    const fetchUserDetailInfo = async () => {
      try {
        const responseData = await sendRequest(
          process.env
            .REACT_APP_BACKEND_URL + `/users/${userId}/user_detail_info/show`
        );
        console.log(responseData.country);
        //   setLoadedArticle(responseData.article);
        setLoadedCountry(responseData.country);
        setLoadedZipcode(responseData.zip_code);
        setLoadedTodofuken(responseData.todoufuken);
        setLoadedShichousonku(responseData.shichousonku);
        setLoadedBanchi(responseData.banchi);
        setLoadedNameOfResidence(responseData.name_of_residence);
        setLoadedPhoneNumber(responseData.phone_number);

        setFormData(
          {
            country: {
              value: responseData.country,
              isValid: true,
            },
            zip_code: {
              value: responseData.zip_code,
              isValid: true,
            },
            todoufuken: {
              value: responseData.todoufuken,
              isValid: true,
            },
            shichousonku: {
              value: responseData.shichousonku,
              isValid: true,
            },
            banchi: {
              value: responseData.banchi,
              isValid: true,
            },
            name_of_residence: {
              value: responseData.name_of_residence,
              isValid: true,
            },
            phone_number: {
              value: responseData.phone_number,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchUserDetailInfo();
  }, [sendRequest, userId, setFormData]);

  const UpdateUserDetailSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await sendRequest(
        process.env
          .REACT_APP_BACKEND_URL + `/users/${userId}/user_detail_info/update`,
        "PATCH",
        JSON.stringify({
          country: formState.inputs.country.value,
          zip_code: formState.inputs.zip_code.value,
          todoufuken: formState.inputs.todoufuken.value,
          shichousonku: formState.inputs.shichousonku.value,
          banchi: formState.inputs.banchi.value,
          name_of_residence: formState.inputs.name_of_residence.value,
          phone_number: formState.inputs.phone_number.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      history.push(`/${auth.userId}/user_detail_info/show`);
    } catch (error) {}
  };

  return (
    <div className="updateUserDetailInfo-container">
      <div className="main-container">
        <div className="card-box">
          updateUserDetailInfo
          <form onSubmit={UpdateUserDetailSubmitHandler}>
            <Input
              id="country"
              element="input"
              type="text"
              label="country"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              initialValue={LoadedCountry}
              initialValid={true}
              placeholder={LoadedCountry}
            />
            <Input
              id="zip_code"
              element="input"
              type="text"
              label="zip_code"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              initialValue={LoadedZipcode}
              initialValid={true}
            />
            <Input
              id="todoufuken"
              element="input"
              type="text"
              label="todoufuken"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              initialValue={LoadedTodofuken}
              initialValid={true}
            />

            <Input
              id="shichousonku"
              element="input"
              type="text"
              label="shichousonku"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              initialValue={LoadedShichousonku}
              initialValid={true}
            />
            <Input
              id="banchi"
              element="input"
              type="text"
              label="banchi"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              initialValue={LoadedBanchi}
              initialValid={true}
            />
            <Input
              id="name_of_residence"
              element="input"
              type="text"
              label="name_of_residence"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              initialValue={LoadedNameOfResidence}
              initialValid={true}
            />
            <Input
              id="phone_number"
              element="input"
              type="text"
              label="phone_number"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              initialValue={LoadedPhoneNumber}
              initialValid={true}
            />
            <Button btnBlack type="submit">submit</Button>
          </form>
        </div>
      </div>
      {/* <div className="side-container"></div> */}
    </div>
  );
};

export default UpdateUserDetailInfos;
