import Axios from "axios";
import React, { useEffect, useState } from "react";
import CryptoIndexTableHeader from "../components/CryptoIndexTableHeader";
import GetCryptoCurrencyByTagList from "../components/GetCryptoCurrencyByTagList";
import { useParams, useHistory, Link } from "react-router-dom";

const GetCryptoCurrencyByTag = () => {
    const [tagSortedCrypto, settagSortedCrypto] = useState([]);
    
  const tag = useParams().tag;
  useEffect(() => {
    const fetch = (params) => {
      Axios.get(
        process.env.REACT_APP_BACKEND_URL + `/cryptos/currencies/tag/${tag}`
      )
        .then((response) => {
          console.log(response.data);
          console.log(response.data.cryptos);
          settagSortedCrypto(response.data.crypto);
        })
        .catch((err) => {});
    };
    fetch();
  }, []);

  return (
    <div className="crypto-index-container">
    <h2>Tag Related Cryptos</h2>
      <CryptoIndexTableHeader />
      <GetCryptoCurrencyByTagList tagSortedCrypto={tagSortedCrypto} />
    </div>
  );
};

export default GetCryptoCurrencyByTag;
