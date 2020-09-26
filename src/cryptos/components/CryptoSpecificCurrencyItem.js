import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./CryptoSpecificCurrencyItem.css";
const CryptoSpecificCurrencyItem = (props) => {
  return (
    <div className="crypto-specific-item-main-container">
      {/* general area */}
      <div className="section1-general-area">
        {/* upper-area1 */}
        <div className="section1-general-area-upper-area">
          <div className="upper-area-item1">
            <div className="image-and-currency-box">
              <div className="crypto-image-area">
                <img
                  className="coin-icon-crypto-specific"
                  src={props.icon}
                  alt=""
                />
              </div>
              <div className="crypto-name-area">
                <h1>{props.name}</h1>
              </div>
              <span>{props.code}</span>
            </div>
          </div>
          <div className="upper-area-item2">
            <div>
              <span className="crypto-price">{props.price}</span>
              <span>{props.roi}</span>
            </div>
            <div>
              <span>profit?%</span>
            </div>
            <div>
              <button>share</button>
            </div>
          </div>
          <div className="upper-area-item3">
            <div>
              <button>Buy</button>
              <button>Exchange</button>
              <button>Gamble</button>
              <button>Earn Crypto</button>
            </div>
            <div>sponsored</div>
          </div>
        </div>
        {/* upper-area-2 */}
        <div className="section1-general-area-lower-area">
          {/* link list */}
          <div className="link-list">
            <ul className="link-list-ul-list">
              <li>Rank {props.marketRank}</li>
              <li>
                <a
                  href={props.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>{" "}
              </li>
              <li>Announcement</li>
              <li>Explorer</li>
              <li>Message Board</li>
              <li>Chat</li>
              <li>
                <a
                  href={props.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Source Code
                </a>
              </li>

              <li>
                <a
                  href={props.technicalDocumentation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Technical Documentation
                </a>
              </li>

              <li>
                <button>Coin</button>
                <button>Inactive</button>
              </li>
            </ul>
          </div>
          {/* marketcap/volume/circulating supply */}
          <div className="marketcap-volume-circulating-supply-table">
            <tr>
              <th>Market Cap</th>
              <th>Volume (24h)</th>
              <th>Circulating Supply</th>
            </tr>
            <tr>
              <td>{props.marketCap}</td>
              <td>{props.a24hourVolume}</td>
              <td>{props.circulatingSupply}</td>
            </tr>
          </div>
        </div>
      </div>
      {/* navigation */}
      <div className="section2-navigation-area">
        <div>
          <ul className="navigation-list-crypto-specific">
            <li className="navigation-item-crypto-specific-charts">
              <span className="navigation-item-crypto-specific-charts">
                Charts
              </span>
            </li>
            <li className="navigation-item-crypto-specific-market-pairs">
              <span className="navigation-item-crypto-specific-market-pairs">
                Market Pairs
              </span>
            </li>
            <li className="navigation-item-crypto-specific-social">
              <span className="navigation-item-crypto-specific-social">
                Social
              </span>
            </li>
            <li className="navigation-item-crypto-specific-tools">
              <span className="navigation-item-crypto-specific-tools">
                Tools
              </span>
            </li>
            <li className="navigation-item-crypto-specific-historical-data">
              <span className="navigation-item-crypto-specific-historical-data">
                Historical Data
              </span>
            </li>
            <li className="navigation-item-crypto-specific-ratings">
              <span className="navigation-item-crypto-specific-ratings">
                Ratings
              </span>
            </li>
            <li className="navigation-item-crypto-specific-on-chain-analysis">
              <span className="navigation-item-crypto-specific-on-chain-analysis">
                On-Chain Analysis
              </span>
            </li>
            <li className="navigation-item-crypto-specific-news">
              <span className="navigation-item-crypto-specific-news">News</span>
            </li>
          </ul>
        </div>
      </div>
      {/* charts */}
      <div className="section3-charts-area">{props.name} Charts</div>
      {/* article&table */}
      <div className="section4-article-and-table-area">
        <div className="article-area-crypto-specific">
          <h1>articles</h1>
        </div>
        <div className="table-area-crypto-specific">
          <h1>tables</h1>
          <table>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific grey-color-row">
                {props.name} Price
              </th>
              <td className="table-data-crypto-specific grey-color-row">
                {props.price}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">{props.name} ROI</th>
              <td className="table-data-crypto-specific">{props.roi}</td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">Market Rank</th>
              <td className="table-data-crypto-specific">{props.marketRank}</td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">Market Cap</th>
              <td className="table-data-crypto-specific">{props.marketCap}</td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">24 Hour Volume</th>
              <td className="table-data-crypto-specific">
                {props.a24hourVolume}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">
                Circulating Supply
              </th>
              <td className="table-data-crypto-specific">
                {props.circulatingSupply}
              </td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">Total Supply</th>
              <td className="table-data-crypto-specific">
                {props.totalSupply}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">Max Supply</th>
              <td className="table-data-crypto-specific">{props.maxSupply}</td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">All Time High</th>
              <td className="table-data-crypto-specific">
                {props.allTimeHigh}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">All Time Low</th>
              <td className="table-data-crypto-specific">{props.allTimeLow}</td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">
                52 Week High / Low
              </th>
              <td className="table-data-crypto-specific">
                {props.a52weekHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">
                90 Day High / Low
              </th>
              <td className="table-data-crypto-specific">
                {props.a90dayHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">
                30 Day High / Low
              </th>
              <td className="table-data-crypto-specific">
                {props.a30dayHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">7 Day High / Low</th>
              <td className="table-data-crypto-specific">
                {props.a7dayHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">
                24 Hour High / Low
              </th>
              <td className="table-data-crypto-specific">
                {props.a24hourHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific">
              <th className="table-header-crypto-specific">
                Yesterday's High / Low{" "}
              </th>
              <td className="table-data-crypto-specific">
                {props.yesterdaysHighAndLow}
              </td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">
                Yesterday's Open / Close{" "}
              </th>
              <td className="table-data-crypto-specific">
                {props.yesterdaysOpenAndClose}
              </td>
            </tr>
            <tr className="table-row-crypto-specific ">
              <th className="table-header-crypto-specific">
                Yesterday's Change{" "}
              </th>
              <td className="table-data-crypto-specific">
                {props.yesterdaysChange}
              </td>
            </tr>
            <tr className="table-row-crypto-specific grey-color-row">
              <th className="table-header-crypto-specific">
                Yesterday's Volume{" "}
              </th>
              <td className="table-data-crypto-specific">
                {props.yesterdaysVolume}
              </td>
            </tr>
          </table>
        </div>
      </div>

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
