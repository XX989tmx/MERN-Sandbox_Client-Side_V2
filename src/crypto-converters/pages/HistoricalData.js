import React, { useState, useCallback, useEffect } from "react";

import { useHttpClient } from "../../shared/hooks/http-hook";
import HistoricalDataList from "../components/HistoricalDataList";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const HistoricalData = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [DateStringArray, setDateStringArray] = useState([]);
  const [HistoricalPriceData, setHistoricalPriceData] = useState([]);

  const [formState, inputHandler] = useForm(
    {
      start: { value: "", isValid: false },
      end: { value: "", isValid: false },
    },
    false
  );

  const getHistoricalDataSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      var startDateValue = formState.inputs.startDate.value;
      var endDateValue = formState.inputs.endDate.value;

      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/get_external_api/crypto_currency/historical_data?start=${startDateValue}&end=${endDateValue}`
      );
      console.log(responseData);
      console.log(responseData.dateStringArray);
      setDateStringArray(responseData.dateStringArray);
      console.log(responseData.historicalPriceData);
      setHistoricalPriceData(responseData.historicalPriceData);
    } catch (error) {}
  };

  const getHistoricalDataBasedOnYear = async (event) => {
    event.preventDefault();
    var historicalDataBasedOnYears = document.getElementById(
      "historicalDataBasedOnYear"
    );
    var historicalDataBasedOnYearsValue = historicalDataBasedOnYears.value;
    switch (historicalDataBasedOnYearsValue) {
      case "2020":
        try {
          var startDateValue = "2020-01-01";
          var endDateValue = "2020-08-01";
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/get_external_api/crypto_currency/historical_data?start=${startDateValue}&end=${endDateValue}`
          );
          console.log(responseData);
          console.log(responseData.dateStringArray);
          setDateStringArray(responseData.dateStringArray);
          console.log(responseData.historicalPriceData);
          setHistoricalPriceData(responseData.historicalPriceData);
        } catch (error) {}
        break;

      case "2019":
        try {
          var startDateValue = "2019-01-01";
          var endDateValue = "2019-12-31";
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/get_external_api/crypto_currency/historical_data?start=${startDateValue}&end=${endDateValue}`
          );
          console.log(responseData);
          console.log(responseData.dateStringArray);
          setDateStringArray(responseData.dateStringArray);
          console.log(responseData.historicalPriceData);
          setHistoricalPriceData(responseData.historicalPriceData);
        } catch (error) {}
        break;

      case "2018":
        try {
          var startDateValue = "2018-01-01";
          var endDateValue = "2018-12-31";
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/get_external_api/crypto_currency/historical_data?start=${startDateValue}&end=${endDateValue}`
          );
          console.log(responseData);
          console.log(responseData.dateStringArray);
          setDateStringArray(responseData.dateStringArray);
          console.log(responseData.historicalPriceData);
          setHistoricalPriceData(responseData.historicalPriceData);
        } catch (error) {}
        break;

      case "2017":
        try {
          var startDateValue = "2017-01-01";
          var endDateValue = "2017-12-31";
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/get_external_api/crypto_currency/historical_data?start=${startDateValue}&end=${endDateValue}`
          );
          console.log(responseData);
          console.log(responseData.dateStringArray);
          setDateStringArray(responseData.dateStringArray);
          console.log(responseData.historicalPriceData);
          setHistoricalPriceData(responseData.historicalPriceData);
        } catch (error) {}
        break;

      case "2016":
        try {
          var startDateValue = "2016-01-01";
          var endDateValue = "2016-12-31";
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/get_external_api/crypto_currency/historical_data?start=${startDateValue}&end=${endDateValue}`
          );
          console.log(responseData);
          console.log(responseData.dateStringArray);
          setDateStringArray(responseData.dateStringArray);
          console.log(responseData.historicalPriceData);
          setHistoricalPriceData(responseData.historicalPriceData);
        } catch (error) {}
        break;

      case "2015":
        try {
          var startDateValue = "2015-01-01";
          var endDateValue = "2015-12-31";
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/get_external_api/crypto_currency/historical_data?start=${startDateValue}&end=${endDateValue}`
          );
          console.log(responseData);
          console.log(responseData.dateStringArray);
          setDateStringArray(responseData.dateStringArray);
          console.log(responseData.historicalPriceData);
          setHistoricalPriceData(responseData.historicalPriceData);
        } catch (error) {}
        break;

      case "2014":
        try {
          var startDateValue = "2014-01-01";
          var endDateValue = "2014-12-31";
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/get_external_api/crypto_currency/historical_data?start=${startDateValue}&end=${endDateValue}`
          );
          console.log(responseData);
          console.log(responseData.dateStringArray);
          setDateStringArray(responseData.dateStringArray);
          console.log(responseData.historicalPriceData);
          setHistoricalPriceData(responseData.historicalPriceData);
        } catch (error) {}
        break;

      case "2013":
        try {
          var startDateValue = "2013-01-01";
          var endDateValue = "2013-12-31";
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              `/get_external_api/crypto_currency/historical_data?start=${startDateValue}&end=${endDateValue}`
          );
          console.log(responseData);
          console.log(responseData.dateStringArray);
          setDateStringArray(responseData.dateStringArray);
          console.log(responseData.historicalPriceData);
          setHistoricalPriceData(responseData.historicalPriceData);
        } catch (error) {}
        break;

      default:
        break;
    }
  };

  return (
    <div>
      get historical data
      <form onSubmit={getHistoricalDataSubmitHandler}>
        <Input
          id="startDate"
          element="input"
          label="startDate"
          placeholder="eg 2020-07-01 *USE THIS FORMAT"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Input
          id="endDate"
          element="input"
          label="endDate"
          placeholder="eg 2020-07-31 *USE THIS FORMAT"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <button>get data 2020 7/1 - 7/31</button>
      </form>
      <select
        name="choice"
        id="historicalDataBasedOnYear"
        onChange={getHistoricalDataBasedOnYear}
      >
        <option value="first" selected>
          Year
        </option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
      </select>
      <select name="choice" id="historicalDataBasedOnMonth">
        <option value="first" selected>
          Month
        </option>
        <option value="second">Second Value</option>
        <option value="third">Third Value</option>
      </select>
      <HistoricalDataList
        dateStringArray={DateStringArray}
        historicalPriceData={HistoricalPriceData}
      />
    </div>
  );
};

export default HistoricalData;
