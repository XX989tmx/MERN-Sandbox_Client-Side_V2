import React from "react";

const CryptoSpecificCurrencyItem = (props) => {
  return (
    <div>
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

      <img src={props.icon} alt="" />
      {props.tokenInsightRating}
      {props.dynamicPerformanceScore}
      {props.dynamicPerformanceScore}
    </div>
  );
};

export default CryptoSpecificCurrencyItem;
