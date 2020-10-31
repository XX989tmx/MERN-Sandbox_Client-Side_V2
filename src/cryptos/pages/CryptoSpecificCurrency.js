import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CryptoSpecificCurrencyList from "../components/CryptoSpecificCurrencyList";
import { useParams, useHistory, Link } from "react-router-dom";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";
import "./CryptoSpecificCurrency.css";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";

const CryptoSpecificCurrency = () => {
  const queryName = useParams().queryName;
  const [MatchedCrypto, setMatchedCrypto] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetch = () => {
      Axios.get(
        process.env.REACT_APP_BACKEND_URL + `/cryptos/currencies/${queryName}`
      )
        .then((response) => {
          console.log(response.data);
          setMatchedCrypto(response.data.crypto);
          function moveToTop(params) {
            window.scrollTo(0, 0);
          }
          moveToTop();
          setIsLoading(false);
        })
        .catch((err) => {});
    };
    fetch();
  }, []);

  return (
    <React.Fragment>
      {IsLoading && <MyLoadingSpinner />}
      {!IsLoading && MatchedCrypto && (
        <div>
          {" "}
          <div className="crypto-specific-container">
            <CryptoSpecificCurrencyList MatchedCrypto={MatchedCrypto} />
            <div className="related-cryptocurrencies"></div>
          </div>
          <MoveToTopButton />
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default CryptoSpecificCurrency;
