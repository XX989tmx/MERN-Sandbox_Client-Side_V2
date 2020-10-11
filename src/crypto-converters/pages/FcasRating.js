import React, { useState, useCallback, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import FcasRatingItem from "../components/FcasRatingItem";
import download from "downloadjs";
import { v4 as uuidv4 } from "uuid";
import "./FcasRating.css";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import CurrencyNameSelector from "../components/CurrencyNameSelector";
import { currencyName } from "../../shared/util/currencyName";
import { currencyCode } from "../../shared/util/currencyCode";
import { Link } from "react-router-dom";
import ExternalLink from "../../shared/components/UIElements/ExternalLink";
import Axios from "axios";
import SuperbList from "../components/SuperbList";
import AttractiveList from "../components/AttractiveList";
import BasicList from "../components/BasicList";
import CautionList from "../components/CautionList";
import FragileList from "../components/FragileList";

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

  const [Option, setOption] = useState();

  const [SuperbRatedCryptoArray, setSuperbRatedCryptoArray] = useState([]);
  const [AttractiveRatedCryptoArray, setAttractiveRatedCryptoArray] = useState(
    []
  );
  const [BasicRatedCryptoArray, setBasicRatedCryptoArray] = useState([]);
  const [CautionRatedCryptoArray, setCautionRatedCryptoArray] = useState([]);
  const [FragileRatedCryptoArray, setFragileRatedCryptoArray] = useState([]);

  useEffect(() => {
    const onLoad = async (params) => {
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL +
            "/get_external_api/crypto_currency/fetchFiatCodesAndCryptoCodes"
        );
        const responseData = await response.json();
        const cryptoCurrencyCodeList = responseData.cryptoCurrencyCodes;
        let cryptoCurrencyCodeOption = cryptoCurrencyCodeList.map((c) => (
          <option value={c.currency_code} key={uuidv4()}>
            {c.currency_name}
          </option>
        ));
        setOption(cryptoCurrencyCodeOption);
      } catch (error) {}
      try {
        const response = await Axios.get(
          process.env.REACT_APP_BACKEND_URL +
            "/cryptos/categorize_crypto_through_fcas_rank"
        );
        const data = response.data;
        console.log(data);
        console.log(data._5ArraySortedBasedOnFcasScore.SuperbRatedCryptoArray);
        console.log(
          data._5ArraySortedBasedOnFcasScore.AttractiveRatedCryptoArray
        );
        console.log(data._5ArraySortedBasedOnFcasScore.BasicRatedCryptoArray);
        console.log(data._5ArraySortedBasedOnFcasScore.CautionRatedCryptoArray);
        console.log(data._5ArraySortedBasedOnFcasScore.FragileRatedCryptoArray);

        setSuperbRatedCryptoArray(
          data._5ArraySortedBasedOnFcasScore.SuperbRatedCryptoArray
        );
        setAttractiveRatedCryptoArray(
          data._5ArraySortedBasedOnFcasScore.AttractiveRatedCryptoArray
        );
        setBasicRatedCryptoArray(
          data._5ArraySortedBasedOnFcasScore.BasicRatedCryptoArray
        );
        setCautionRatedCryptoArray(
          data._5ArraySortedBasedOnFcasScore.CautionRatedCryptoArray
        );
        setFragileRatedCryptoArray(
          data._5ArraySortedBasedOnFcasScore.FragileRatedCryptoArray
        );
      } catch (error) {
        console.log(error);
      }
      // let currencyArray = [];
      // currencyArray = currencyCode.split(",");
      // let selector = currencyArray.map((a) => (
      //   <option value={a} key={a}>
      //     {a}
      //   </option>
      // ));
    };
    onLoad();
  }, []);

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

  const currencyListDownloader = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          "/download/csv/digital_currency_list.csv"
      );
      const blob = await res.blob();
      download(blob, "digital_currency_list.csv");
      console.log("1 csv file was downloaded. download was successful");
    } catch (err) {}
  };

  const currencyNameSelector = async (event) => {
    try {
      // var cryptoCodes = document.getElementById("Code");
      // var cryptoCode = cryptoCodes.value;
      // console.log(cryptoCode);
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/get_external_api/crypto_currency/health_index?cryptoCode=${event.target.value}`
      );
      console.log(responseData);
      console.log(responseData.fcasRating);
      setFcasRatingInfo(responseData);
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <div className="fcasRating-container">
        <div className="main-container">
          <div>
            <h3 className="center">FCAS Rating Checker</h3>
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
                <div>
                  <select name="Code" id="Code" onChange={currencyNameSelector}>
                    <option value="default">Currency Code</option>
                    {Option}
                  </select>
                </div>
                <p style={{ color: "grey", textAlign: "left" }}>
                  if something does not work, please reload the page.
                </p>
                <Button btnBlack>Get Fcas Score</Button>
              </form>
              <div>
                {/* <button>open currency code list modal</button> */}
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
            <div>
              <p>
                Fundamental Crypto Asset Score (FCAS) is a comparative metric
                used to assess the fundamental health of crypto projects. The
                score is derived from the interactivity between primary project
                life-cycle factors: User Activity/Utility, Developer Behavior,
                and Market Maturity. Each crypto asset is given a composite
                numerical score, 0-1000, and an associated rating as follows:
              </p>
            </div>

            <div>
              <img
                src="https://test-images-b.s3.amazonaws.com/crypto_rating.png"
                alt=""
                style={{ width: "500px", height: "350px" }}
              />
              <ExternalLink
                to="https://www.alphavantage.co/"
                className="natural"
                text="Data Provided By Alphavantage"
              />
            </div>
            <hr />
            <div className="superb-list-container">
              <div>
                <span className="superb-heading">Superb</span>
              </div>
              <div className="crypto-list-array-components-area">
                <SuperbList SuperbRatedCryptoArray={SuperbRatedCryptoArray} />
              </div>
            </div>
            <hr />
            <div className="attractive-list-container">
              <div>
                {" "}
                <span className="attractive-heading">Attractive</span>
              </div>
              <div className="crypto-list-array-components-area">
                <AttractiveList
                  AttractiveRatedCryptoArray={AttractiveRatedCryptoArray}
                />
              </div>
            </div>
            <hr />
            <div className="basic-list-container">
              <div>
                <span className="basic-heading">Basic</span>
              </div>
              <div className="crypto-list-array-components-area">
                <BasicList BasicRatedCryptoArray={BasicRatedCryptoArray} />
              </div>
            </div>
            <hr />
            <div className="caution-list-container">
              <div>
                <span className="caution-heading">Caution</span>
              </div>
              <div className="crypto-list-array-components-area">
                <CautionList
                  CautionRatedCryptoArray={CautionRatedCryptoArray}
                />
              </div>
            </div>
            <hr />
            <div className="fragile-list-container">
              <div>
                {" "}
                <span className="fragile-heading">Fragile</span>
              </div>
              <div className="crypto-list-array-components-area">
                <FragileList
                  FragileRatedCryptoArray={FragileRatedCryptoArray}
                />
              </div>
            </div>
            <hr />
            <Link to={"/crypto_converter"}>Go Back</Link>
            <MoveToTopButton />
          </div>
        </div>
        {/* <div className="side-container"></div> */}
      </div>
      <FooterMainNavigation />
    </React.Fragment>
  );
};

export default FcasRating;
