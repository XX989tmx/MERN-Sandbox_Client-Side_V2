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
      />
      {/* navigation */}
      <Section2NavigationArea queryName={props.queryName} />
      {/* ratingArea */}
      <div className="section3-rating-area">
        {props.name} Rating Area
        {/* <div>
          <h3>{props.tokenInsightRating}</h3>
          <h3>{props.dynamicPerformanceScore}</h3>
          <h3>{props.fcasRating}</h3>
        </div> */}
        {/* textArea */}
        <div className="rating-area-text-area">
          <h1>Ratings</h1>
          <p>
            Disclaimer: Ratings are calculated by third party organizations and
            are not influenced or endorsed by MERNSandbox in any way.
          </p>
          <p>
            FCAS stands for Fundamental Crypto Asset Score, a single,
            consistently comparable value for measuring cryptocurrency project
            health. FCAS measures User Activity, Developer Behavior and Asset
            Maturity.
          </p>
          <p>Find Out More About Fcas | Request Historical FCAS data via CSV</p>
        </div>
        {/* fcasGraph */}
        <div className="fcas-graph-rating-area">
          <p>Fundamental Crypto Asset Score</p>
          <h1>{props.fcasRatingInitial}</h1>
          <h6>{props.fcasScore}</h6>
        </div>
        {/* fcasChart */}
        <div className="fcas-chart-rating-area">
          <p>FCAS Trend</p>
        </div>
        {/* fcasReportSheet */}
        <div className="fcas-report-sheet-rating-area">
          <div>
            <h2>{props.report.heading}</h2>
            <ul>
              {props.report.report_list.map((v, i) => {
                return <li key={i}>{v}</li>;
              })}
            </ul>
            <button>See Full Report</button>
            <p>{props.report.paragraph}</p>
          </div>
          <div>
            <div>
              <h1>{props.report.score}</h1>

              <span>{props.report.updated_at}</span>
            </div>
            <div>
              <ul>
                <li>
                  Market Opportunity
                  {"      "}
                  {props.report.market_opportunity}
                </li>
                <li>
                  Underlying Technology
                  {"      "}
                  {props.report.underlying_technology}
                </li>
                <li>
                  Ecosystem Structure
                  {"      "}
                  {props.report.ecosystem_structure}
                </li>
                <li>
                  Core Team
                  {"      "}
                  {props.report.core_team}
                </li>
                <li>
                  Token Economics
                  {"      "}
                  {props.report.token_economics}
                </li>
                <li>
                  Token Performance
                  {"      "}
                  {props.report.token_performance}
                </li>
                <li>
                  Roadmap Progress
                  {"      "}
                  {props.report.roadmap_progress}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* tokenInsightRatingArea */}
        <div className="tokeninsignt-rating-area">
          <div className="token-insight-rating">
            <p>TokenInsight Rating</p>
            <h1>{props.tokenInsightRating.score}</h1>
            <span>{props.tokenInsightRating.score_string}</span>
            <h4>Industry:</h4>
            <span>{props.tokenInsightRating.industry}</span>
            <h4>Rating Description:</h4>
            <p>{props.tokenInsightRating.rating_description}</p>
          </div>
          <div className="token-insight-analysis">
            <p>TokenInsight Analysis</p>
            <h1>Dynamic Performance Score</h1>
            <h1>{props.dynamicPerformanceScore}</h1>
            {/* chart here */}
          </div>
        </div>
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
