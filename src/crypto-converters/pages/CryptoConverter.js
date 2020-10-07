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
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import ExternalLink from "../../shared/components/UIElements/ExternalLink";

const CryptoConverter = () => {
  // const [cryptoData, setCryptoData] = useState();
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
  const [
    PriceDiffBetweenPreviousAndLatest,
    setPriceDiffBetweenPreviousAndLatest,
  ] = useState({});

  const [Minus, setMinus] = useState(false);
  const [Plus, setPlus] = useState(false);
  const [JPYFirstCharacter, setJPYFirstCharacter] = useState("");
  const [USDFirstCharacter, setUSDFirstCharacter] = useState("");
  const [AUDFirstCharacter, setAUDFirstCharacter] = useState("");
  const [BRLFirstCharacter, setBRLFirstCharacter] = useState("");
  const [CADFirstCharacter, setCADFirstCharacter] = useState("");
  const [CHFFirstCharacter, setCHFFirstCharacter] = useState("");
  const [CLPFirstCharacter, setCLPFirstCharacter] = useState("");
  const [CNYFirstCharacter, setCNYFirstCharacter] = useState("");
  const [DKKFirstCharacter, setDKKFirstCharacter] = useState("");
  const [EURFirstCharacter, setEURFirstCharacter] = useState("");
  const [GBPFirstCharacter, setGBPFirstCharacter] = useState("");
  const [HKDFirstCharacter, setHKDFirstCharacter] = useState("");
  const [INRFirstCharacter, setINRFirstCharacter] = useState("");
  const [ISKFirstCharacter, setISKFirstCharacter] = useState("");
  const [KRWFirstCharacter, setKRWFirstCharacter] = useState("");
  const [NZDFirstCharacter, setNZDFirstCharacter] = useState("");
  const [PLNFirstCharacter, setPLNFirstCharacter] = useState("");
  const [RUBFirstCharacter, setRUBFirstCharacter] = useState("");
  const [SEKFirstCharacter, setSEKFirstCharacter] = useState("");
  const [SGDFirstCharacter, setSGDFirstCharacter] = useState("");
  const [THBFirstCharacter, setTHBFirstCharacter] = useState("");
  const [TRYFirstCharacter, setTRYFirstCharacter] = useState("");
  const [TWDFirstCharacter, setTWDFirstCharacter] = useState("");

  const [FromCurrency1, setFromCurrency1] = useState();
  const [FromCurrency2, setFromCurrency2] = useState();
  const [ToCurrency1, setToCurrency1] = useState();
  const [ToCurrency2, setToCurrency2] = useState();
  const [userInputCurrencyAmount, setuserInputCurrencyAmount] = useState(1);
  const [Result, setResult] = useState();

  const [FiatCurrencyCodeOptions, setFiatCurrencyCodeOptions] = useState("");
  const [CryptoCurrencyCodeOptions, setCryptoCurrencyCodeOptions] = useState(
    ""
  );

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
        // setCryptoData(responseData.exchange_rate);
        setLastValue(responseData.lastValueOfEveryCurrency);
        setCurrencySymbol(responseData.currencySymbolOfEveryCurrency);
        console.log(responseData.lastValueOfEveryCurrency);
        console.log(responseData.lastValueOfEveryCurrency.last_JPY);
        console.log(responseData.currencySymbolOfEveryCurrency);
        console.log(responseData.fcasRating);
        console.log(responseData.fcasScore);
        setFcasScore(responseData.fcasScore);
        setFcasRating(responseData.fcasRating);
        console.log(responseData.priceDifferenceBetweenPreviousAndLatest);
        setPriceDiffBetweenPreviousAndLatest(
          responseData.priceDifferenceBetweenPreviousAndLatest
        );

        //JPY
        try {
          let jpy = responseData.priceDifferenceBetweenPreviousAndLatest.JPY;
          let firstCharacter = new String(jpy).charAt(0);
          console.log(new String(jpy).charAt(0));
          setJPYFirstCharacter(firstCharacter);
          // if (firstCharacter !== "-") {
          //   setPlus(true);
          // }
        } catch (error) {}

        //USD
        try {
          let usd = responseData.priceDifferenceBetweenPreviousAndLatest.USD;
          let firstCharacterUSD = new String(usd).charAt(0);
          console.log(new String(usd).charAt(0));
          setUSDFirstCharacter(firstCharacterUSD);
        } catch (error) {}

        //AUD
        try {
          let aud = responseData.priceDifferenceBetweenPreviousAndLatest.AUD;
          let firstCharacterAUD = new String(aud).charAt(0);
          console.log(new String(aud).charAt(0));
          setAUDFirstCharacter(firstCharacterAUD);
        } catch (error) {}

        //BRL
        try {
          let brl = responseData.priceDifferenceBetweenPreviousAndLatest.BRL;
          let firstCharacterBRL = new String(brl).charAt(0);
          console.log(new String(brl).charAt(0));
          setBRLFirstCharacter(firstCharacterBRL);
        } catch (error) {}

        //CAD
        try {
          let cad = responseData.priceDifferenceBetweenPreviousAndLatest.CAD;
          let firstCharacterCAD = new String(cad).charAt(0);
          console.log(new String(cad).charAt(0));
          setCADFirstCharacter(firstCharacterCAD);
        } catch (error) {}

        //CHF
        try {
          let chf = responseData.priceDifferenceBetweenPreviousAndLatest.CHF;
          let firstCharacterCHF = new String(chf).charAt(0);
          console.log(new String(chf).charAt(0));
          setCHFFirstCharacter(firstCharacterCHF);
        } catch (error) {}

        //CLP
        try {
          let clp = responseData.priceDifferenceBetweenPreviousAndLatest.CLP;
          let firstCharacterCLP = new String(clp).charAt(0);
          console.log(new String(clp).charAt(0));
          setCLPFirstCharacter(firstCharacterCLP);
        } catch (error) {}

        //CNY
        try {
          let cny = responseData.priceDifferenceBetweenPreviousAndLatest.CNY;
          let firstCharacterCNY = new String(cny).charAt(0);
          console.log(new String(cny).charAt(0));
          setCNYFirstCharacter(firstCharacterCNY);
        } catch (error) {}

        //DKK
        try {
          let dkk = responseData.priceDifferenceBetweenPreviousAndLatest.DKK;
          let firstCharacterDKK = new String(dkk).charAt(0);
          console.log(new String(dkk).charAt(0));
          setDKKFirstCharacter(firstCharacterDKK);
        } catch (error) {}

        //EUR
        try {
          let eur = responseData.priceDifferenceBetweenPreviousAndLatest.EUR;
          let firstCharacterEUR = new String(eur).charAt(0);
          console.log(new String(eur).charAt(0));
          setEURFirstCharacter(firstCharacterEUR);
        } catch (error) {}

        //GBP
        try {
          let gbp = responseData.priceDifferenceBetweenPreviousAndLatest.GBP;
          let firstCharacterGBP = new String(gbp).charAt(0);
          console.log(new String(gbp).charAt(0));
          setGBPFirstCharacter(firstCharacterGBP);
        } catch (error) {}

        //HKD
        try {
          let hkd = responseData.priceDifferenceBetweenPreviousAndLatest.HKD;
          let firstCharacterHKD = new String(hkd).charAt(0);
          console.log(new String(hkd).charAt(0));
          setHKDFirstCharacter(firstCharacterHKD);
        } catch (error) {}

        //INR
        try {
          let inr = responseData.priceDifferenceBetweenPreviousAndLatest.INR;
          let firstCharacterINR = new String(inr).charAt(0);
          console.log(new String(inr).charAt(0));
          setINRFirstCharacter(firstCharacterINR);
        } catch (error) {}

        //ISK
        try {
          let isk = responseData.priceDifferenceBetweenPreviousAndLatest.ISK;
          let firstCharacterISK = new String(isk).charAt(0);
          console.log(new String(isk).charAt(0));
          setISKFirstCharacter(firstCharacterISK);
        } catch (error) {}

        //KRW
        try {
          let krw = responseData.priceDifferenceBetweenPreviousAndLatest.KRW;
          let firstCharacterKRW = new String(krw).charAt(0);
          console.log(new String(krw).charAt(0));
          setKRWFirstCharacter(firstCharacterKRW);
        } catch (error) {}

        //NZD
        try {
          let nzd = responseData.priceDifferenceBetweenPreviousAndLatest.NZD;
          let firstCharacterNZD = new String(nzd).charAt(0);
          console.log(new String(nzd).charAt(0));
          setNZDFirstCharacter(firstCharacterNZD);
        } catch (error) {}

        //PLN
        try {
          let pln = responseData.priceDifferenceBetweenPreviousAndLatest.PLN;
          let firstCharacterPLN = new String(pln).charAt(0);
          console.log(new String(pln).charAt(0));
          setPLNFirstCharacter(firstCharacterPLN);
        } catch (error) {}

        //RUB
        try {
          let rub = responseData.priceDifferenceBetweenPreviousAndLatest.RUB;
          let firstCharacterRUB = new String(rub).charAt(0);
          console.log(new String(rub).charAt(0));
          setRUBFirstCharacter(firstCharacterRUB);
        } catch (error) {}

        //SEK
        try {
          let sek = responseData.priceDifferenceBetweenPreviousAndLatest.SEK;
          let firstCharacterSEK = new String(sek).charAt(0);
          console.log(new String(sek).charAt(0));
          setSEKFirstCharacter(firstCharacterSEK);
        } catch (error) {}

        //SGD
        try {
          let sgd = responseData.priceDifferenceBetweenPreviousAndLatest.SGD;
          let firstCharacterSGD = new String(sgd).charAt(0);
          console.log(new String(sgd).charAt(0));
          setSGDFirstCharacter(firstCharacterSGD);
        } catch (error) {}

        //THB
        try {
          let thb = responseData.priceDifferenceBetweenPreviousAndLatest.THB;
          let firstCharacterTHB = new String(thb).charAt(0);
          console.log(new String(thb).charAt(0));
          setTHBFirstCharacter(firstCharacterTHB);
        } catch (error) {}

        //TRY
        try {
          let cTry = responseData.priceDifferenceBetweenPreviousAndLatest.TRY;
          let firstCharacterTRY = new String(cTry).charAt(0);
          console.log(new String(cTry).charAt(0));
          setTRYFirstCharacter(firstCharacterTRY);
        } catch (error) {}

        //TWD
        try {
          let twd = responseData.priceDifferenceBetweenPreviousAndLatest.TWD;
          let firstCharacterTWD = new String(twd).charAt(0);
          console.log(new String(twd).charAt(0));
          setTWDFirstCharacter(firstCharacterTWD);
        } catch (error) {}

        // responseData.priceDifferenceBetweenPreviousAndLatest.USD;
        // responseData.priceDifferenceBetweenPreviousAndLatest.AUD;
        // responseData.priceDifferenceBetweenPreviousAndLatest.BRL;
        // responseData.priceDifferenceBetweenPreviousAndLatest.CAD;
        // responseData.priceDifferenceBetweenPreviousAndLatest.CHF;
        // responseData.priceDifferenceBetweenPreviousAndLatest.CLP;
        // responseData.priceDifferenceBetweenPreviousAndLatest.CNY;
        // responseData.priceDifferenceBetweenPreviousAndLatest.DKK;
        // responseData.priceDifferenceBetweenPreviousAndLatest.EUR;
        // responseData.priceDifferenceBetweenPreviousAndLatest.GBP;
        // responseData.priceDifferenceBetweenPreviousAndLatest.HKD;
        // responseData.priceDifferenceBetweenPreviousAndLatest.INR;
        // responseData.priceDifferenceBetweenPreviousAndLatest.ISK;
        // responseData.priceDifferenceBetweenPreviousAndLatest.KRW;
        // responseData.priceDifferenceBetweenPreviousAndLatest.NZD;
        // responseData.priceDifferenceBetweenPreviousAndLatest.PLN;
        // responseData.priceDifferenceBetweenPreviousAndLatest.RUB;
        // responseData.priceDifferenceBetweenPreviousAndLatest.SEK;
        // responseData.priceDifferenceBetweenPreviousAndLatest.SGD;
        // responseData.priceDifferenceBetweenPreviousAndLatest.THB;
        // responseData.priceDifferenceBetweenPreviousAndLatest.TRY;
        // responseData.priceDifferenceBetweenPreviousAndLatest.TWD;
      } catch (error) {}

      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL +
            "/get_external_api/crypto_currency/fetchFiatCodesAndCryptoCodes"
        );
        const responseData = await response.json();
        console.log(responseData);
        const fiatCurrencyCodeList = responseData.fiatCurrencyCodes;

        let fiatCurrencyCodeOption = fiatCurrencyCodeList.map((f) => (
          <option value={f.currency_code} key={f.currency_code}>
            {f.currency_name}
          </option>
        ));
        setFiatCurrencyCodeOptions(fiatCurrencyCodeOption);
        const cryptoCurrencyCodeList = responseData.cryptoCurrencyCodes;
        let cryptoCurrencyCodeOption = cryptoCurrencyCodeList.map((c) => (
          <option value={c.currency_code} key={c.currency_code}>
            {c.currency_name}
          </option>
        ));
        setCryptoCurrencyCodeOptions(cryptoCurrencyCodeOption);
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

  // const goBackToTop = (event) => {
  //   event.preventDefault();
  //   window.scrollTo(0, 0);
  // };

  const openNewWindowByClick = (event) => {
    event.preventDefault();
    window.open("http://localhost:3000/download");
  };

  const promptTimer = () => {
    setTimeout(() => {
      window.prompt("please sign up");
    }, 5000);
  };

  const getExchangeRateBothCurrencyAndCryptoHandler = async (event) => {
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
    } catch (error) {}
  };

  const FromCurrencyChangehandler1 = async (event) => {
    // event.preventDefault();
    setFromCurrency1(event.target.value);
  };
  const FromCurrencyChangehandler2 = async (event) => {
    // event.preventDefault();
    setFromCurrency2(event.target.value);
  };
  const ToCurrencyChangehandler1 = async (event) => {
    // event.preventDefault();

    setToCurrency1(event.target.value);
  };
  const ToCurrencyChangehandler2 = async (event) => {
    // event.preventDefault();
    setToCurrency2(event.target.value);
  };

  const exchangeRateSubmithandler = async (event) => {
    event.preventDefault();
    try {
      // var FromCurrency = formState.inputs.FromCurrency.value;
      // var ToCurrency = formState.inputs.ToCurrency.value;
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/get_external_api/crypto_currency/exchange_rate?FromCurrency=${
            FromCurrency1 || FromCurrency2
          }&ToCurrency=${ToCurrency1 || ToCurrency2}`
      );
      console.log(responseData);
      console.log(responseData.ExchangeRate);

      setExchangeRate(responseData);
      console.log(new Number(responseData.ExchangeRate));
      let resultAmount =
        new Number(responseData.ExchangeRate) * userInputCurrencyAmount;
      console.log(resultAmount);
      setResult(resultAmount);
    } catch (error) {}
  };

  const userInputCurrencyAmountChangeHandler = async (event) => {
    setuserInputCurrencyAmount(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="cryptoConverter-container">
        <div className="main-container">
          <div className="post-form-area center">
            <h3 className="center">Currency To Bitcoin Converter</h3>
            <ExternalLink
              to="https://www.blockchain.com/"
              className="natural"
              text="Data Provided By Blockchain.com"
            />
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
              {/* components: result data result data */}
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
            <p style={{ color: "grey" }}>
              if something does not work, please reload the page.
            </p>
            <div style={{ marginLeft: "10px" }}>
              <Link to="/crypto_converter/fcasRating">
                See Other Crypto's FCAS Rating
              </Link>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <Link to="/crypto_converter/historical_data">
                See Bitcoin's Historical Price Data
              </Link>
            </div>
          </div>
          <hr />

          <div className="center" style={{ marginTop: "60px" }}>
            <h3 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              Currency Exchange Rate Converter
            </h3>
            <ExternalLink
              className="natural"
              to="https://www.alphavantage.co/"
              text="Data Provided By alphavantage"
            />
            {/* <p>
            check Crypto Currency's Currency Code List, 'show list on Modal with
            onClick. make this p tag to button??'
          </p>
          <p>
            check Fiat Currency's Currency Code List, 'show list on Modal with
            onClick. make this p tag to button??'
          </p> */}
            <div className="currency-exchange-rate-input">
              <div className="currency-exchange-rate-input-form">
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
              <div className="currency-exchange-rate-input-result">
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
              </div>
            </div>
            <hr />
            <div className="currency-exchange-rate-selector">
              <div className="currency-exchange-rate-selector-form">
                <form onSubmit={exchangeRateSubmithandler}>
                  <div className="user-input-currency-amount">
                    <input
                      type="text"
                      onChange={userInputCurrencyAmountChangeHandler}
                      value={userInputCurrencyAmount}
                    ></input>
                  </div>
                  <div className="from-currency-area">
                    <span className="from-text">From</span>
                    <select
                      className="from-currency1"
                      value={FromCurrency1}
                      onChange={FromCurrencyChangehandler1}
                    >
                      <option value="">Currency</option>
                      {FiatCurrencyCodeOptions}
                    </select>
                    <select
                      className="from-currency2"
                      value={FromCurrency2}
                      onChange={FromCurrencyChangehandler2}
                    >
                      <option value="">Crypto</option>
                      {CryptoCurrencyCodeOptions}
                    </select>
                  </div>
                  <div className="to-currency-area">
                    <span className="to-text">To</span>
                    <select
                      className="to-currency1"
                      value={ToCurrency1}
                      onChange={ToCurrencyChangehandler1}
                    >
                      <option value="">Currency</option>
                      {FiatCurrencyCodeOptions}
                    </select>
                    <select
                      className="to-currency2"
                      value={ToCurrency2}
                      onChange={ToCurrencyChangehandler2}
                    >
                      <option value="">Crypto</option>
                      {CryptoCurrencyCodeOptions}
                    </select>
                  </div>
                  <div className="exchange-rate-submit">
                    <button type="submit" value="Submit">
                      get exchange rate
                    </button>
                  </div>
                </form>
              </div>
              <div className="currency-exchange-rate-selector-result">
                <h5>
                  {userInputCurrencyAmount} {ExchangeRate.FromCurrencyName} is
                  worth:
                </h5>
                <h3>
                  {Result && <span> {new Number(Result).toFixed(2)}</span>}
                  <span>{ExchangeRate.ToCurrencyName}</span>
                </h3>
              </div>
              {/* <h5>1 {ExchangeRate.FromCurrencyName} is worth:</h5>
          <h3>
            {ExchangeRate.ExchangeRate}{" "}
            <span>{ExchangeRate.ToCurrencyName}</span>
          </h3>

          <p>last updated at: {ExchangeRate.LastRefreshed}</p> */}
            </div>
          </div>

          <div className="crypto-get-area">
            <div className="crypto-get-area">
              <hr />

              <div className="currency-crypto-table-area center">
                <h3 className="center">Exchange Rate Index</h3>
                <p>1 BTC to Currency</p>
                <div className="center">
                  {/* components: GET Req for crypto & data pulled from backend */}
                  {/* <p>{cryptoData}</p>
                <GetCryptoData props={cryptoData} /> */}
                  <form>
                    <Button btnBlack onClick={getRequesthandler}>
                      Get Latest Data
                    </Button>
                  </form>
                  <ExternalLink
                    to="https://www.blockchain.com/"
                    className="natural"
                    text="Data Provided By Blockchain.com"
                  />
                  {/* <button draggable="true" onClick={goBackToTop}>
                back to top page
              </button> */}
                  {/* <div className="back-to-top">
                <button onClick={goBackToTop}>goBackToTop</button>
              </div> */}
                </div>
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

                    <th>
                      {" "}
                      {(JPYFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.JPY
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (JPYFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.JPY
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(USDFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.USD
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (USDFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.USD
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(AUDFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.AUD
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (AUDFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.AUD
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(BRLFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.BRL
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (BRLFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.BRL
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(CADFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.CAD
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (CADFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.CAD
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(CHFFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.CHF
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (CHFFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.CHF
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(CLPFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.CLP
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (CLPFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.CLP
                            ).toFixed(2)}
                          </span>
                        ))}
                    </th>
                  </tr>

                  <tr>
                    <th scope="col">
                      <span>🇨🇳</span>
                    </th>
                    <th scope="row">CNY</th>
                    <th scope="row">Renminbi</th>
                    <th scope="row">
                      {CurrencySymbol.symbol_CNY}
                      {LastValue.last_CNY}
                    </th>
                    <th>
                      {(CNYFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.CNY
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (CNYFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.CNY
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(DKKFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.DKK
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (DKKFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.DKK
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(EURFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.EUR
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (EURFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.EUR
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(GBPFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.GBP
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (GBPFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.GBP
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(HKDFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.HKD
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (HKDFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.HKD
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(INRFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.INR
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (INRFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.INR
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(ISKFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.ISK
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (ISKFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.ISK
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(KRWFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.KRW
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (KRWFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.KRW
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(NZDFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.NZD
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (NZDFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.NZD
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(PLNFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.PLN
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (PLNFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.PLN
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(RUBFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.RUB
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (RUBFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.RUB
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    </th>{" "}
                    <th>
                      {(SEKFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.SEK
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (SEKFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.SEK
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(SGDFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.SGD
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (SGDFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.SGD
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(THBFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.THB
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (THBFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.THB
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(TRYFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.TRY
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (TRYFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.TRY
                            ).toFixed(2)}
                          </span>
                        ))}
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
                    <th>
                      {(TWDFirstCharacter === "-" && (
                        <span style={{ color: "red" }}>
                          {new Number(
                            PriceDiffBetweenPreviousAndLatest.TWD
                          ).toFixed(2)}
                        </span>
                      )) ||
                        (TWDFirstCharacter !== "-" && (
                          <span style={{ color: "green" }}>
                            +
                            {new Number(
                              PriceDiffBetweenPreviousAndLatest.TWD
                            ).toFixed(2)}
                          </span>
                        ))}
                    </th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <MoveToTopButton />
        </div>
        {/* <div className="side-container"></div> */}
      </div>
      <FooterMainNavigation />
    </React.Fragment>
  );
};

export default CryptoConverter;
