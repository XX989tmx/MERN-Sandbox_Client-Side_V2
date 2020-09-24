import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
const CryptoSpecificCurrencyItem = (props) => {
  return (
    <div>
    
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

      {props.tokenInsightRating}
      {props.dynamicPerformanceScore}
      {props.fcasRating}
      <div>
        <Link to={`/cryptos/currencies/${props.queryName}/ratings`}>
          <p>Rating</p>
        </Link>
      </div>
    </div>
  );
};

export default CryptoSpecificCurrencyItem;
