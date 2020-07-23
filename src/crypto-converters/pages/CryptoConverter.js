import React, { useState, useCallback, useEffect } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

import "./CryptoConverter.css";
import GetCryptoData from "../components/GetCryptoData";

const CryptoConverter = () => {
  const [cryptoData, setCryptoData] = useState();
  const [Timer, setTimer] = useState(false);

  const [cryptoPostData, setCryptoPostData] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [Month, setMonth] = useState();
  const [Day, setDay] = useState();
  const [Hours, setHours] = useState();
  const [Minutes, setMinutes] = useState();
  const [Seconds, setSeconds] = useState();

  const [formState, inputHandler] = useForm(
    {
      currency: { value: "", isValid: false },
      value: { value: "", isValid: false },
    },
    false
  );

  // const converterSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   try {

  //     const formData = new FormData();
  //     formData.append("currency", formState.inputs.currency.value);
  //     formData.append("value", formState.inputs.value.value);
  //     console.log(formData);

  //     const response = await fetch(
  //       "http://localhost:5000/api/get_external_api/get_value_basedon_currency",
  //       "POST",
  //       formData
  //     );
  //     const responseData = response.json();

  //     setCryptoPostData(responseData.value_based_on_your_currency);
  //     console.log(responseData.value_based_on_your_currency);
  //   } catch (error) {}
  // };

  // setInterval(() => {
  //     const currentMonth = new Date().getMonth();
  //     const currentDay = new Date().getDay();
  //     const currentHours = new Date().getHours();
  //     const currentMinutes = new Date().getMinutes();
  //     const currentSeconds = new Date().getSeconds();

  //     setMonth(currentMonth);
  //     setDay(currentDay);
  //     setHours(currentHours);
  //     setMinutes(currentMinutes);
  //     setSeconds(currentSeconds);
  //     console.log(currentHours);

  // }, 1000);

  // get request for getting crypto data
  useEffect(() => {
    const getRequestForCryptoData = async (params) => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/get_external_api/crypto_currency"
        );
        const responseData = await response.json();
        setCryptoData(responseData.exchange_rate);
      } catch (error) {}
    };
    getRequestForCryptoData();
  }, [fetch, Timer]);

  //   setInterval(() => {
  //     setTimer((prevMode) => !prevMode );
  //   }, 10000);
  const getRequesthandler = (event) => {
    event.preventDefault();
    setTimer((prevMode) => !prevMode);
  };

  // post request for sending currency & value input and get converted result
  const cryptoConvertionSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/get_external_api/get_value_basedon_currency",
        "POST",
        JSON.stringify({
          currency: formState.inputs.currency.value,
          value: formState.inputs.value.value,
        }),
        { "Content-Type": "application/json" }
      );

      setCryptoPostData(responseData.value_based_on_your_currency);

      console.log(responseData.value_based_on_your_currency);
    } catch (error) {}
  };

  const goBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

  const openNewWindowByClick = (event) => {
    event.preventDefault();
    window.open("http://localhost:3000/download");
  };

  const promptTimer = () => {
    setTimeout(() => {
      window.prompt("please sign up");
    }, 5000);
  };

  return (
    <div className="container">
      <div className="main-container">
        <div className="post-form-area">
          <form className="center" onSubmit={cryptoConvertionSubmitHandler}>
            {/* <input id="currency" type="text" label="Currency" />
            <input id="value" type="text" label="Value" /> */}
            <Input
              id="currency"
              element="input"
              label="Currency"
              placeholder="Your Currency"
              // autoFocus="true"
              errorText="Please enter a valid currency."
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
            <Input
              id="value"
              element="input"
              label="Value"
              placeholder="Value  $"
              errorText="Please enter a valid value."
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
              Convert
            </Button>
          </form>

          <div className="result-data-area">
            components: result data result data
            <p>Your input value is worth :</p>
            <h1>{cryptoPostData} BTC</h1>
          </div>

          <div>{/* <h1>{Hours}:{Minutes}:{Seconds}</h1> */}</div>
        </div>

        <div className="crypto-get-area">
          <div className="crypto-get-area">
            <div>
              components: GET Req for crypto & data pulled from backend
              <p>{cryptoData}</p>
              <GetCryptoData props={cryptoData} />
              <form>
                <Button onClick={getRequesthandler}>Get Data</Button>
              </form>
              <button draggable="true" onClick={goBackToTop}>
                back to previous page
              </button>
              <div className="back-to-top">
                <button onClick={goBackToTop}>goBackToTop</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side-container">components: sidebar</div>
    </div>
  );
};

export default CryptoConverter;
