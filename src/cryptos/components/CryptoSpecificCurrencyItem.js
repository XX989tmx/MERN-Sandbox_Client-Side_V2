import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./CryptoSpecificCurrencyItem.css";
import Section1GeneralArea from "./Section1GeneralArea";
import Section2NavigationArea from "./Section2NavigationArea";
import Section4ArticleAndTableArea from "./Section4ArticleAndTableArea";
const CryptoSpecificCurrencyItem = (props) => {
  return (
    <div className="crypto-specific-item-main-container">
      {/* general area */}
      <Section1GeneralArea
        icon={props.icon}
        name={props.name}
        code={props.code}
        price={props.price}
        roi={props.roi}
        marketRank={props.marketRank}
        website={props.website}
        sourceCode={props.sourceCode}
        technicalDocumentation={props.technicalDocumentation}
        marketCap={props.marketCap}
        a24hourVolume={props.a24hourVolume}
        circulatingSupply={props.circulatingSupply}
      />
      {/* navigation */}
      <Section2NavigationArea queryName={props.queryName} />
      {/* charts */}
      <div className="section3-charts-area">{props.name} Charts</div>
      {/* article&table */}
      <Section4ArticleAndTableArea
        name={props.name}
        price={props.price}
        roi={props.roi}
        marketRank={props.marketRank}
        marketCap={props.marketCap}
        a24hourVolume={props.a24hourVolume}
        circulatingSupply={props.circulatingSupply}
        totalSupply={props.totalSupply}
        maxSupply={props.maxSupply}
        allTimeHigh={props.allTimeHigh}
        allTimeLow={props.allTimeLow}
        a52weekHighAndLow={props.a52weekHighAndLow}
        a90dayHighAndLow={props.a90dayHighAndLow}
        a30dayHighAndLow={props.a30dayHighAndLow}
        a7dayHighAndLow={props.a7dayHighAndLow}
        a24hourHighAndLow={props.a24hourHighAndLow}
        yesterdaysHighAndLow={props.yesterdaysHighAndLow}
        yesterdaysOpenAndClose={props.yesterdaysOpenAndClose}
        yesterdaysChange={props.yesterdaysChange}
        yesterdaysVolume={props.yesterdaysVolume}
      />

      {/* {props.website}

      {props.tokenInsightRating}
      {props.dynamicPerformanceScore}
      {props.fcasRating} */}
      <div>
        <Link to={`/cryptos/currencies/${props.queryName}/ratings`}>
          <p>Rating</p>
        </Link>
      </div>
    </div>
  );
};

export default CryptoSpecificCurrencyItem;
