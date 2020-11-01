import Axios from "axios";
import React, { useEffect, useState } from "react";
import CryptoSpecificCurrencyRatingList from "../components/CryptoSpecificCurrencyRatingList";
import { useParams, useHistory, Link } from "react-router-dom";
import FooterMainNavigation from "../../shared/components/Footer/FooterMainNavigation";
import MoveToTopButton from "../../shared/components/UIElements/MoveToTopButton";
import MyLoadingSpinner from "../../shared/components/UIElements/MyLoadingSpinner";

const CryptoSpecificCurrencyRating = () => {
  const queryName = useParams().queryName;
  const [MatchedCurrencyInRating, setMatchedCurrencyInRating] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetch = (params) => {
      Axios.get(
        process.env.REACT_APP_BACKEND_URL +
          `/cryptos/currencies/${queryName}/ratings`
      )
        .then((response) => {
          console.log(response.data);
          setMatchedCurrencyInRating(response.data.crypto);
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
      {!IsLoading && MatchedCurrencyInRating && (
        <div>
          {" "}
          <div className="crypto-specific-container">
            {/* <h3>Ratings</h3> */}
            <CryptoSpecificCurrencyRatingList
              MatchedCurrencyInRating={MatchedCurrencyInRating}
            />
            <div className="related-cryptocurrencies"></div>
          </div>
          <MoveToTopButton />
          <FooterMainNavigation />
        </div>
      )}
    </React.Fragment>
  );
};

export default CryptoSpecificCurrencyRating;
