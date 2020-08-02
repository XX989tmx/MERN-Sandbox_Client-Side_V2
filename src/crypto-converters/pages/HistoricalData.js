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
      <HistoricalDataList
        dateStringArray={DateStringArray}
        historicalPriceData={HistoricalPriceData}
      />
    </div>
  );
};

export default HistoricalData;
