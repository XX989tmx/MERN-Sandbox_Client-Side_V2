import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import Section1GeneralArea from "./Section1GeneralArea";
import Section2NavigationArea from "./Section2NavigationArea";
import Section4ArticleAndTableArea from "./Section4ArticleAndTableArea";

import "./CryptoSpecificCurrencyRatingItem.css";
const CryptoSpecificCurrencyRatingItem = (props) => {
  return (
    <div className="crypto-specific-rating-item-main-container">
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
      {/* ratingArea */}
      <div className="section3-rating-area">
        {props.name} Rating Area
        <div>
          <h3>{props.tokenInsightRating}</h3>
          <h3>{props.dynamicPerformanceScore}</h3>
          <h3>{props.fcasRating}</h3>
        </div>
        {/* textArea */}
        <div className="rating-area-text-area">
          <h1></h1>
          <p></p>
          <p></p>
          <p></p>
        </div>
        {/* fcasGraph */}
        <div className="fcas-graph-rating-area"></div>
        {/* fcasChart */}
        <div className="fcas-chart-rating-area"></div>
        {/* fcasReportSheet */}
        <div className="fcas-report-sheet-rating-area"></div>
        {/* tokenInsightRatingArea */}
        <div className="tokeninsignt-rating-area"></div>
      </div>

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

      {/* <img src={props.icon} alt="" />
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
      {props.technicalDocumentation} */}

      <div>
        <Link to={`/cryptos/currencies/${props.queryName}`}>
          <p>Chart</p>
        </Link>
      </div>
    </div>
  );
};

export default CryptoSpecificCurrencyRatingItem;
