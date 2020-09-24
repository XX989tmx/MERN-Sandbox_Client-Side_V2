import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import CryptoSpecificCurrencyRatingList from '../components/CryptoSpecificCurrencyRatingList';
import { useParams, useHistory, Link } from "react-router-dom";
const CryptoSpecificCurrencyRating = () => {
    const queryName = useParams().queryName;
    const [MatchedCurrencyInRating, setMatchedCurrencyInRating] = useState([]);
    useEffect(() => {
        const fetch = (params) => {
            Axios.get(
              process.env.REACT_APP_BACKEND_URL +
                `/cryptos/currencies/${queryName}/ratings`
            ).then((response) => {
                console.log(response.data)
                setMatchedCurrencyInRating(response.data.matchedCurrency);
            }).catch((err) => {
                
            });
        }
        fetch();
    }, []);
    return (
      <div>
        <h3>Ratings</h3>
        <CryptoSpecificCurrencyRatingList
          MatchedCurrencyInRating={MatchedCurrencyInRating}
        />
      </div>
    );
}

export default CryptoSpecificCurrencyRating;
