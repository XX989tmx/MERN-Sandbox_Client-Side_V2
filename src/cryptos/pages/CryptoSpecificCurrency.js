import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CryptoSpecificCurrencyList from "../components/CryptoSpecificCurrencyList";
import { useParams, useHistory, Link } from "react-router-dom";
import './CryptoSpecificCurrency.css';
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";

const CryptoSpecificCurrency = () => {
  const queryName = useParams().queryName;
  const [MatchedCrypto, setMatchedCrypto] = useState([]);

  useEffect(() => {
    const fetch = () => {
      Axios.get(
        process.env.REACT_APP_BACKEND_URL + `/cryptos/currencies/${queryName}`
      )
        .then((response) => {
          console.log(response.data);
          setMatchedCrypto(response.data.crypto);
        })
        .catch((err) => {});
    };
    fetch();
  }, []);

  return (
    <React.Fragment>
      <div className="crypto-specific-container">
        <CryptoSpecificCurrencyList MatchedCrypto={MatchedCrypto} />
        <div className="related-cryptocurrencies"></div>
      </div>
      <MoveToTopButton />
      <FooterMainNavigation />
    </React.Fragment>
  );
};

export default CryptoSpecificCurrency;
