import Axios from "axios";
import React, { useEffect, useState } from "react";
import CryptoSpecificCurrencyMarketPairsList from "../components/CryptoSpecificCurrencyMarketPairsList";
import { useParams, useHistory, Link } from "react-router-dom";
import "./CryptoSpecificCurrencyMarketPairs.css";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";

const CryptoSpecificCurrencyMarketPairs = () => {
  const queryName = useParams().queryName;
  const [CryptoData, setCryptoData] = useState([]);
  useEffect(() => {
    const fetch = (params) => {
      Axios.get(
        process.env.REACT_APP_BACKEND_URL +
          `/cryptos/currencies/${queryName}/market_pairs`
      )
        .then((response) => {
          console.log(response.data.crypto);
          setCryptoData(response.data.crypto);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetch();
  }, []);
  return (
    <React.Fragment>
      <div className="crypto-specific-market-pairs-container">
        <CryptoSpecificCurrencyMarketPairsList CryptoData={CryptoData} />
        <div className="related-cryptocurrencies"></div>
      </div>
      <MoveToTopButton />
      <FooterMainNavigation />
    </React.Fragment>
  );
};

export default CryptoSpecificCurrencyMarketPairs;
