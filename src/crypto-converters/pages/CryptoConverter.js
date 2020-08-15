import React, { useState, useCallback, useEffect } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { Link } from "react-router-dom";

import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

import "./CryptoConverter.css";
import GetCryptoData from "../components/GetCryptoData";
import ExchangeRateItem from "../components/ExchangeRateItem";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";

const CryptoConverter = () => {
  const [cryptoData, setCryptoData] = useState();
  const [Timer, setTimer] = useState(false);

  const [cryptoPostData, setCryptoPostData] = useState();
  const [LastValue, setLastValue] = useState({});
  const [CurrencySymbol, setCurrencySymbol] = useState({});
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [Month, setMonth] = useState();
  const [Day, setDay] = useState();
  const [Hours, setHours] = useState();
  const [Minutes, setMinutes] = useState();
  const [Seconds, setSeconds] = useState();

  const [fcasScore, setFcasScore] = useState();
  const [fcasRating, setFcasRating] = useState();

  const [ExchangeRate, setExchangeRate] = useState({});

  const [formState, inputHandler] = useForm(
    {
      // currency: { value: "", isValid: false },
      value: { value: "", isValid: false },
      // FromCurrency: { value: "", isValid: false },
      // ToCurrency: { value: "", isValid: false },
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
          process.env.REACT_APP_BACKEND_URL +
            "/get_external_api/crypto_currency"
        );
        const responseData = await response.json();
        setCryptoData(responseData.exchange_rate);
        setLastValue(responseData.lastValueOfEveryCurrency);
        setCurrencySymbol(responseData.currencySymbolOfEveryCurrency);
        console.log(responseData.lastValueOfEveryCurrency);
        console.log(responseData.lastValueOfEveryCurrency.last_JPY);
        console.log(responseData.currencySymbolOfEveryCurrency);
        console.log(responseData.fcasRating);
        console.log(responseData.fcasScore);
        setFcasScore(responseData.fcasScore);
        setFcasRating(responseData.fcasRating);
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
      var currency = document.getElementById("currency");
      var currencyValue = currency.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          "/get_external_api/get_value_basedon_currency",
        "POST",
        JSON.stringify({
          currency: currencyValue,
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

  const getExchangeRateBothCurrencyAndCryptoHandler = async(event) => {
    event.preventDefault();

    try {
      var FromCurrency = formState.inputs.FromCurrency.value;
      var ToCurrency = formState.inputs.ToCurrency.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/get_external_api/crypto_currency/exchange_rate?FromCurrency=${FromCurrency}&ToCurrency=${ToCurrency}`
      );
      console.log(responseData);
      console.log(responseData.ExchangeRate);
      setExchangeRate(responseData);
    } catch (error) {
      
    }
  }

  return (
    <div className="container">
      <div className="main-container">
        <div className="post-form-area">
          <h3 className="center">Currency To Bitcoin Converter</h3>
          <form className="center" onSubmit={cryptoConvertionSubmitHandler}>
            {/* <input id="currency" type="text" label="Currency" />
            <input id="value" type="text" label="Value" /> */}

            {/* <Input
              id="currency"
              element="input"
              label="Currency"
              placeholder="Your Currency"
              // autoFocus="true"
              errorText="Please enter a valid currency."
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            /> */}

            <select name="currency" id="currency">
              <option value="first" selected>
                choose your currency
              </option>
              <option value="JPY">JPY</option>
              <option value="USD">USD</option>
              <option value="AUD">AUD</option>
              <option value="BRL">BRL</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="DKK">DKK</option>
              <option value="EUR">EUR</option>
              <option value="GBP">EUR</option>
              <option value="HKD">HKD</option>
              <option value="INR">INR</option>
              <option value="ISK">INR</option>
              <option value="KRW">KRW</option>
              <option value="NZD">NZD</option>
              <option value="PLN">PLN</option>
              <option value="RUB">RUB</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="TWD">TWD</option>
            </select>

            <Input
              id="value"
              element="input"
              label="Value"
              placeholder="Value  $"
              errorText="Please enter a valid value."
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
            <Button btnBlack type="submit">
              Convert
            </Button>
          </form>

          <div className="result-data-area center">
            components: result data result data
            <p>Your input value is worth :</p>
            <h1 className="center">{cryptoPostData} BTC</h1>
          </div>

          <div>
            {(fcasRating === "Attractive" && (
              <div>
                <h3>
                  fcasRating:
                  <span style={{ backgroundColor: "#73EFBB" }}>
                    {fcasRating}
                  </span>
                </h3>
                <h3>fcasScore: {fcasScore}</h3>
              </div>
            )) ||
              (fcasRating === "Superb" && (
                <div>
                  <h3>
                    fcasRating:
                    <span style={{ backgroundColor: "#00E685" }}>
                      {fcasRating}
                    </span>
                  </h3>
                  <h3>fcasScore: {fcasScore}</h3>
                </div>
              )) ||
              (fcasRating === "Basic" && (
                <div>
                  <h3>
                    fcasRating:
                    <span style={{ backgroundColor: "#BFEFDB" }}>
                      {fcasRating}
                    </span>
                  </h3>
                  <h3>fcasScore: {fcasScore}</h3>
                </div>
              )) ||
              (fcasRating === "Caution" && (
                <div>
                  <h3>
                    fcasRating:
                    <span style={{ backgroundColor: "#FFAC70" }}>
                      {fcasRating}
                    </span>
                  </h3>
                  <h3>fcasScore: {fcasScore}</h3>
                </div>
              )) ||
              (fcasRating === "Fragile" && (
                <div>
                  <h3>
                    fcasRating:
                    <span style={{ backgroundColor: "#FF4D4D" }}>
                      {fcasRating}
                    </span>
                  </h3>
                  <h3>fcasScore: {fcasScore}</h3>
                </div>
              ))}
            {/* <h3>fcasRating: {fcasRating}</h3>
            <h3>fcasScore: {fcasScore}</h3> */}
          </div>

          <div>{/* <h1>{Hours}:{Minutes}:{Seconds}</h1> */}</div>
            <p style={{color:'grey'}}>if something does not work, please reload the page.</p>
          <div>
            <Link to="/crypto_converter/fcasRating">
              See Other Crypto's FCAS Rating
            </Link>
          </div>
          <div>
            <Link to="/crypto_converter/historical_data">
              See Bitcoin's Historical Price Data
            </Link>
          </div>
        </div>

        <div className="center" style={{ marginTop: "60px" }}>
          <h3>Currency Exchange Rate Converter</h3>
          <p>
            check Crypto Currency's Currency Code List, 'show list on Modal with
            onClick. make this p tag to button??'
          </p>
          <p>
            check Fiat Currency's Currency Code List, 'show list on Modal with
            onClick. make this p tag to button??'
          </p>
          <form onSubmit={getExchangeRateBothCurrencyAndCryptoHandler}>
            <Input
              id="FromCurrency"
              element="input"
              label="FromCurrency"
              placeholder="Input Currency Code eg. CNY(Both Crypto Code and Fiat Code is available)"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
            <Input
              id="ToCurrency"
              element="input"
              label="ToCurrency"
              placeholder="Input Currency Code eg. BTC(Both Crypto Code and Fiat Code is available)"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            />
            <Button btnBlack>get exchange rate</Button>
          </form>
        </div>
        <div className="center">
          <ExchangeRateItem
            FromCurrencyCode={ExchangeRate.FromCurrencyCode}
            FromCurrencyName={ExchangeRate.FromCurrencyName}
            ToCurrencyCode={ExchangeRate.ToCurrencyCode}
            ToCurrencyName={ExchangeRate.ToCurrencyName}
            ExchangeRate={ExchangeRate.ExchangeRate}
            LastRefreshed={ExchangeRate.LastRefreshed}
            TimeZone={ExchangeRate.TimeZone}
            BidPrice={ExchangeRate.BidPrice}
            AskPrice={ExchangeRate.AskPrice}
          />
          {/* <h5>1 {ExchangeRate.FromCurrencyName} is worth:</h5>
          <h3>
            {ExchangeRate.ExchangeRate}{" "}
            <span>{ExchangeRate.ToCurrencyName}</span>
          </h3>

          <p>last updated at: {ExchangeRate.LastRefreshed}</p> */}
        </div>

        <div className="crypto-get-area">
          <div className="crypto-get-area">
            <div className="center">
              components: GET Req for crypto & data pulled from backend
              <p>{cryptoData}</p>
              <GetCryptoData props={cryptoData} />
              <form>
                <Button btnBlack onClick={getRequesthandler}>
                  Get Latest Data
                </Button>
              </form>
              <button draggable="true" onClick={goBackToTop}>
                back to top page
              </button>
              <div className="back-to-top">
                <button onClick={goBackToTop}>goBackToTop</button>
              </div>
            </div>

            <div>
              <table className="currency-crypto-table">
                <tr>
                  <th scope="col">Flag</th>
                  <th scope="col">Exchange Code</th>
                  <th scope="col">Currency name</th>
                  <th scope="col">Value equal to 1 BTC</th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇯🇵</span>
                  </th>
                  <th scope="row">JPY</th>
                  <th scope="row">Japansease Yen</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_JPY}
                    {LastValue.last_JPY}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇺🇸</span>
                  </th>
                  <th scope="row">USD</th>
                  <th scope="row">US Dollar</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_USD}
                    {LastValue.last_USD}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇦🇺</span>
                  </th>
                  <th scope="row">AUD</th>
                  <th scope="row">Australian dollar</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_AUD}
                    {LastValue.last_AUD}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇧🇷</span>
                  </th>
                  <th scope="row">BRL</th>
                  <th scope="row">Brazilian Real</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_BRL}
                    {LastValue.last_BRL}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇨🇦</span>
                  </th>
                  <th scope="row">CAD</th>
                  <th scope="row">Canadian Dollar</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_CAD}
                    {LastValue.last_CAD}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇨🇭</span>
                  </th>
                  <th scope="row">CHF</th>
                  <th scope="row">Swiss franc</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_CHF}
                    {LastValue.last_CHF}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇨🇱</span>
                  </th>
                  <th scope="row">CLP</th>
                  <th scope="row">Chilean Peso</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_CLP}
                    {LastValue.last_CLP}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇨🇱</span>
                  </th>
                  <th scope="row">CNY</th>
                  <th scope="row">Renminbi</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_CNY}
                    {LastValue.last_CNY}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇩🇰</span>
                  </th>
                  <th scope="row">DKK</th>
                  <th scope="row">Danish krone</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_DKK}
                    {LastValue.last_DKK}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇪🇺</span>
                  </th>
                  <th scope="row">EUR</th>
                  <th scope="row">Euro</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_EUR}
                    {LastValue.last_EUR}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇬🇧</span>
                  </th>
                  <th scope="row">GBP</th>
                  <th scope="row">British pound sterling</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_GBP}
                    {LastValue.last_GBP}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇭🇰</span>
                  </th>
                  <th scope="row">HKD</th>
                  <th scope="row">Hong Kong Dollar</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_HKD}
                    {LastValue.last_HKD}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇮🇳</span>
                  </th>
                  <th scope="row">INR</th>
                  <th scope="row">Indian rupee</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_INR}
                    {LastValue.last_INR}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇮🇸</span>
                  </th>
                  <th scope="row">ISK</th>
                  <th scope="row">Icelandic króna</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_ISK}
                    {LastValue.last_ISK}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇰🇷</span>
                  </th>
                  <th scope="row">KRW</th>
                  <th scope="row">South Korean Won</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_KRW}
                    {LastValue.last_KRW}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇳🇿</span>
                  </th>
                  <th scope="row">NZD</th>
                  <th scope="row">New Zealand dollar</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_NZD}
                    {LastValue.last_NZD}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇵🇱</span>
                  </th>
                  <th scope="row">PLN</th>
                  <th scope="row">Polish zloty</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_PLN}
                    {LastValue.last_PLN}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇷🇺</span>
                  </th>
                  <th scope="row">RUB</th>
                  <th scope="row">Russian ruble</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_RUB}
                    {LastValue.last_RUB}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇸🇪</span>
                  </th>
                  <th scope="row">SEK</th>
                  <th scope="row">Swedish krona</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_SEK}
                    {LastValue.last_SEK}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇸🇬</span>
                  </th>
                  <th scope="row">SGD</th>
                  <th scope="row">Singapore dollar</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_SGD}
                    {LastValue.last_SGD}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇹🇭</span>
                  </th>
                  <th scope="row">THB</th>
                  <th scope="row">Thai Baht</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_THB}
                    {LastValue.last_THB}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇹🇷</span>
                  </th>
                  <th scope="row">TRY</th>
                  <th scope="row">Turkish Lira</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_TRY}
                    {LastValue.last_TRY}
                  </th>
                </tr>

                <tr>
                  <th scope="col">
                    <span>🇹🇼</span>
                  </th>
                  <th scope="row">TWD</th>
                  <th scope="row">New Taiwan dollar</th>
                  <th scope="row">
                    {CurrencySymbol.symbol_TWD}
                    {LastValue.last_TWD}
                  </th>
                </tr>
              </table>

              {/* <h4>
                <span>🇯🇵</span> Japansease Yen:
                {CurrencySymbol.symbol_JPY}
                {LastValue.last_JPY}
              </h4>
              <h4>
                <span>🇺🇸</span> US Dollar: {CurrencySymbol.symbol_USD}
                {LastValue.last_USD}
              </h4>
              <h4>
                <span>🇦🇺</span> Australian dollar: {CurrencySymbol.symbol_AUD}
                {LastValue.last_AUD}
              </h4>
              <h4>
                <span>🇧🇷</span> Brazilian Real: {CurrencySymbol.symbol_BRL}
                {LastValue.last_BRL}
              </h4>
              <h4>
                <span>🇨🇦</span> Canadian Dollar: {CurrencySymbol.symbol_CAD}
                {LastValue.last_CAD}
              </h4>
              <h4>
                <span>🇨🇭</span> Swiss franc: {CurrencySymbol.symbol_CHF}
                {LastValue.last_CHF}
              </h4>
              <h4>
                <span>🇨🇱</span> Chilean Peso: {CurrencySymbol.symbol_CLP}
                {LastValue.last_CLP}
              </h4>
              <h4>
                <span>🇨🇳</span> Renminbi: {CurrencySymbol.symbol_CNY}
                {LastValue.last_CNY}
              </h4>
              <h4>
                <span>🇩🇰</span> Danish krone: {CurrencySymbol.symbol_DKK}
                {LastValue.last_DKK}
              </h4>
              <h4>
                <span>🇪🇺</span> Euro: {CurrencySymbol.symbol_EUR}
                {LastValue.last_EUR}
              </h4>
              <h4>
                <span>🇬🇧</span> British pound sterling:{" "}
                {CurrencySymbol.symbol_GBP}
                {LastValue.last_GBP}
              </h4>
              <h4>
                <span>🇭🇰</span> Hong Kong Dollar: {CurrencySymbol.symbol_HKD}
                {LastValue.last_HKD}
              </h4>
              <h4>
                <span>🇮🇳</span> Indian rupee: {CurrencySymbol.symbol_INR}
                {LastValue.last_INR}
              </h4>
              <h4>
                <span>🇮🇸</span> Icelandic króna: {CurrencySymbol.symbol_ISK}
                {LastValue.last_ISK}
              </h4>
              <h4>
                <span>🇰🇷</span> South Korean Won: {CurrencySymbol.symbol_KRW}
                {LastValue.last_KRW}
              </h4>
              <h4>
                <span>🇳🇿</span> New Zealand dollar: {CurrencySymbol.symbol_NZD}
                {LastValue.last_NZD}
              </h4>
              <h4>
                <span>🇵🇱</span> Polish zloty: {CurrencySymbol.symbol_PLN}
                {LastValue.last_PLN}
              </h4>
              <h4>
                <span>🇷🇺</span> Russian ruble: {CurrencySymbol.symbol_RUB}
                {LastValue.last_RUB}
              </h4>
              <h4>
                <span>🇸🇪</span> Swedish krona: {CurrencySymbol.symbol_SEK}
                {LastValue.last_SEK}
              </h4>
              <h4>
                <span>🇸🇬</span> Singapore dollar: {CurrencySymbol.symbol_SGD}
                {LastValue.last_SGD}
              </h4>
              <h4>
                <span>🇹🇭</span> Thai Baht: {CurrencySymbol.symbol_THB}
                {LastValue.last_THB}
              </h4>
              <h4>
                <span>🇹🇷</span> Turkish Lira: {CurrencySymbol.symbol_TRY}
                {LastValue.last_TRY}
              </h4>
              <h4>
                <span>🇹🇼</span> New Taiwan dollar: {CurrencySymbol.symbol_TWD}
                {LastValue.last_TWD}
              </h4> */}
            </div>
          </div>
        </div>
        <MoveToTopButton />
      </div>
      <div className="side-container">{/* components: sidebar */}</div>
    </div>
  );
};

export default CryptoConverter;
