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
        announcement={props.announcement}
        explorer={props.explorer}
        message_board={props.message_board}
        chat={props.chat}
        sourceCode={props.sourceCode}
        technicalDocumentation={props.technicalDocumentation}
        tags={props.tags}
        marketCap={props.marketCap}
        a24hourVolume={props.a24hourVolume}
        circulatingSupply={props.circulatingSupply}
        totalSupply={props.totalSupply}
        maxSupply={props.maxSupply}
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
        a52weekHigh={props.a52weekHigh}
        a52weekLow={props.a52weekLow}
        a90dayHigh={props.a90dayHigh}
        a90dayLow={props.a90dayLow}
        a30dayHigh={props.a30dayHigh}
        a30dayLow={props.a30dayLow}
        a7dayHigh={props.a7dayHigh}
        a7dayLow={props.a7dayLow}
        a24hourHigh={props.a24hourHigh}
        a24hourLow={props.a24hourLow}
        yesterdaysHigh={props.yesterdaysHigh}
        yesterdaysLow={props.yesterdaysLow}
        yesterdaysOpen={props.yesterdaysOpen}
        yesterdaysClose={props.yesterdaysClose}
        yesterdaysChange={props.yesterdaysChange}
        yesterdaysVolume={props.yesterdaysVolume}
        // article
        article={props.article}
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
