import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import ExternalLink from "../../shared/components/UIElements/ExternalLink";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import CryptoIndexList from "../components/CryptoIndexList";
import CryptoIndexTableHeader from "../components/CryptoIndexTableHeader";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";
import "./CryptoIndex.css";
const CryptoIndex = () => {
  const [CryptoArray, setCryptoArray] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetch = (params) => {
      Axios.get(process.env.REACT_APP_BACKEND_URL + `/cryptos/index`)
        .then((response) => {
          console.log(response.data);
          console.log(response.data.cryptos);
          setCryptoArray(response.data.cryptos);
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
      {!IsLoading && CryptoArray && (
        <div>
          {" "}
          <div className="crypto-index-container">
            <div>
              <h2>Top 100 Cryptocurrencies by Market Capitalization</h2>
              <ExternalLink
                to="https://coinmarketcap.com/"
                className="natural"
                text="Data Provided by CoinMarketCap"
              />
              {/* <table className="thead-tag">
        <thead className="thead-crypto-index"> */}
              <CryptoIndexTableHeader />
              {/* </thead> */}

              <CryptoIndexList CryptoArray={CryptoArray} />
              {/* </table> */}
            </div>
          </div>
          <MoveToTopButton />
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default CryptoIndex;
