import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CryptoSpecificCurrencyList from "../components/CryptoSpecificCurrencyList";
import { useParams, useHistory, Link } from "react-router-dom";

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
          setMatchedCrypto(response.data.matchedCurrency);
        })
        .catch((err) => {});
    };
    fetch();
  }, []);

  return (
    <div>
      <CryptoSpecificCurrencyList MatchedCrypto={MatchedCrypto} />
      <div className="related-cryptocurrencies"></div>
    </div>
  );
};

export default CryptoSpecificCurrency;
