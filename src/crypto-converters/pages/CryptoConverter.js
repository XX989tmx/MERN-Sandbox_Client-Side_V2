import React, { useState, useCallback, useEffect } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import {useHttpClient} from "../../shared/hooks/http-hook";

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

  // const converterSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const responseData = await sendRequest(
  //       "http://localhost:5000/api/get_external_api/get_value_basedon_currency",
  //       "POST"
  //     );
  //     const responseData = await response.json();
  //     setCryptoPostData(responseData.value_based_on_your_currency);
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

  //    const getRequestForCryptoDataSubmitHandler = async (event) => {
  //       event.preventDefault();

  //       try {
  //         const response = await fetch(
  //           "http://localhost:5000/api/get_external_api/crypto_currency"
  //         );
  //         const responseData = await response.json();
  //         setCryptoData(responseData);

  //         console.log(responseData.exchange_rate);
  //       } catch (error) {}
  //     };

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
          <form className="center">
            <input id="currency" type="text" label="Currency" />
            <input id="value" type="text" label="Value" />
            <Button>submit</Button>
          </form>

          <div className="result-data-area">
            components: result data result data
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
