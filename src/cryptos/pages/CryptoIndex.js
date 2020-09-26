import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CryptoIndexList from "../components/CryptoIndexList";
import './CryptoIndex.css';
const CryptoIndex = () => {
  const [CryptoArray, setCryptoArray] = useState([]);

  useEffect(() => {
    const fetch = (params) => {
      Axios.get(process.env.REACT_APP_BACKEND_URL + `/cryptos/index`)
        .then((response) => {
          console.log(response.data.cryptoArray);
          setCryptoArray(response.data.cryptoArray);
        })
        .catch((err) => {});
    };
    fetch();
  }, []);

  return (
    <div>
      <h2>Top 100 Cryptocurrencies by Market Capitalization</h2>
      {/* <table className="thead-tag">
        <thead className="thead-crypto-index"> */}
          <tr className="tr-table-header">
            <th className="table-header-header1">
              <span></span>
            </th>
            <th className="table-header-header2">
              <span>Rank</span>
            </th>
            <th className="table-header-header3">
              <span>Name</span>
            </th>
            <th className="table-header-header4">
              <span>Market Cap</span>
            </th>
            <th className="table-header-header5">
              <span>Price</span>
            </th>
            <th className="table-header-header6">
              <span>Change(24h)</span>
            </th>
            <th className="table-header-header7">
              <span>Volume(24h)</span>
            </th>
            <th className="table-header-header8">
              <span>Circulating Supply</span>
            </th>
            <th className="table-header-header9">
              <span>Price Graph</span>
            </th>
            <th className="table-header-header10">
              <span></span>
            </th>
          </tr>
        {/* </thead> */}

        <CryptoIndexList CryptoArray={CryptoArray} />
      {/* </table> */}
    </div>
  );
};

export default CryptoIndex;
