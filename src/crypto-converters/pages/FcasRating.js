import React, { useState, useCallback, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import FcasRatingItem from "../components/FcasRatingItem";
import download from "downloadjs";

import './FcasRating.css';
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";

const FcasRating = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      // currency: { value: "", isValid: false },
      CryptoCode: { value: "", isValid: false },
    },
    false
  );
  const [FcasRatingInfo, setFcasRatingInfo] = useState({});

  const getFcasRating = async (event) => {
    event.preventDefault();
    try {
      var cryptoCode = formState.inputs.cryptoCode.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/get_external_api/crypto_currency/health_index?cryptoCode=${cryptoCode}`
      );
      console.log(responseData);
      console.log(responseData.fcasRating);
      setFcasRatingInfo(responseData);
    } catch (error) {}
  };

  const currencyListDownloader = async(event) => {
      event.preventDefault();

      try {
        const res = await fetch(
          process.env.REACT_APP_BACKEND_URL +
            "/download/csv/digital_currency_list.csv"
        );
        const blob = await res.blob();
        download(blob, "digital_currency_list.csv");
        console.log(
          "1 csv file was downloaded. download was successful"
        );
      } catch (err) {}
  }

  return (
    <div className="fcasRating-container">
      <div className="main-container">
        <div>
          <div className="center">
            <form onSubmit={getFcasRating}>
              <Input
                id="cryptoCode"
                element="input"
                label="cryptoCode"
                placeholder="currency code eg BTC"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
              />
              <p style={{ color: "grey", textAlign:'left' }}>
                if something does not work, please reload the page.
              </p>
              <Button btnBlack>Get Fcas Score</Button>
            </form>
            <div>
              <button>open currency code list modal</button>
              <button onClick={currencyListDownloader}>
                download all currency code list
              </button>
            </div>
          </div>

          <div>
            <FcasRatingItem
              symbol={FcasRatingInfo.symbol}
              name={FcasRatingInfo.name}
              fcasRating={FcasRatingInfo.fcasRating}
              fcasScore={FcasRatingInfo.fcasScore}
              developlerScore={FcasRatingInfo.developlerScore}
              marketMaturityScore={FcasRatingInfo.marketMaturityScore}
              utilityScore={FcasRatingInfo.utilityScore}
              lastRefreshed={FcasRatingInfo.lastRefreshed}
              timezone={FcasRatingInfo.timezone}
            />
          </div>
          <MoveToTopButton />
        </div>
      </div>
      {/* <div className="side-container"></div> */}
    </div>
  );
};

export default FcasRating;
