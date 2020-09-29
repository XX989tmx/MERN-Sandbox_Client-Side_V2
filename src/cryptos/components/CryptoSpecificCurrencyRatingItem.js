import React from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
const CryptoSpecificCurrencyRatingItem = (props) => {
    return (
      <div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>

        <img src={props.icon} alt="" />
        <h1>{props.name}</h1>
        {props.code}
        {props.price}
        {props.roi}
        {props.marketRank}
        {props.marketCap}
        {props.a24hourVolume}
        {props.circulatingSupply}
        {props.totalSupply}
        {props.maxSupply}
        {props.allTimeHigh}
        {props.allTimeLow}
        {props.a52weekHighAndLow}
        {props.a90dayHighAndLow}
        {props.a30dayHighAndLow}
        {props.a7dayHighAndLow}
        {props.a24hourHighAndLow}
        {props.yesterdaysHighAndLow}
        {props.yesterdaysOpenAndClose}
        {props.yesterdaysChange}
        {props.yesterdaysVolume}
        {props.website}
        {props.sourceCode}
        {props.technicalDocumentation}

        <h3>{props.tokenInsightRating}</h3>
        <h3>{props.dynamicPerformanceScore}</h3>
        <h3>{props.fcasRating}</h3>

        <div>
          <Link to={`/cryptos/currencies/${props.queryName}`}>
            <p>Chart</p>
          </Link>
        </div>
      </div>
    );
}

export default CryptoSpecificCurrencyRatingItem;
