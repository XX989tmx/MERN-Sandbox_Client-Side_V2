import React, { useState, useCallback, useEffect } from "react";

import { useHttpClient } from "../../shared/hooks/http-hook";
import HistoricalDataList from "../components/HistoricalDataList";

const HistoricalData = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [DateStringArray, setDateStringArray] = useState([]);
  const [HistoricalPriceData, setHistoricalPriceData] = useState([]);

  const getHistoricalDataSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          "/get_external_api/crypto_currency/historical_data"
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
