import Axios from "axios";
import React, { useEffect, useState } from "react";
import CryptoSpecificCurrencyHistoricalDataList from "../components/CryptoSpecificCurrencyHistoricalDataList";
import { useParams, useHistory, Link } from "react-router-dom";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";
import "./CryptoSpecificCurrencyHistoricalData.css";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
const CryptoSpecificCurrencyHistoricalData = () => {
  const queryName = useParams().queryName;
  const [CryptoData, setCryptoData] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetch = (params) => {
      Axios.get(
        process.env.REACT_APP_BACKEND_URL +
          `/cryptos/currencies/${queryName}/historicalData`
      )
        .then((response) => {
          console.log(response.data);
          setCryptoData(response.data.crypto);
          function moveToTop(params) {
            window.scrollTo(0, 0);
          }
          moveToTop();
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetch();
  }, []);
  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading && CryptoData && (
        <div>
          {" "}
          <div className="crypto-specific-historical-data-container">
            <CryptoSpecificCurrencyHistoricalDataList CryptoData={CryptoData} />
            <div className="related-cryptocurrencies"></div>
          </div>
          <MoveToTopButton />
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default CryptoSpecificCurrencyHistoricalData;
