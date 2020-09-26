import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import './CryptoSpecificCurrencyItem.css';
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
              <span>{props.price}</span>
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
          <div>
            <ul>
              <li>Rank {props.marketRank}</li>
              <li>Website{props.website}</li>
              <li>Announcement</li>
              <li>Explorer</li>
              <li>Message Board</li>
              <li>Chat</li>
              <li>Source Code{props.sourceCode}</li>
              <li>Technical Documentation{props.technicalDocumentation}</li>
              <li>
                <button>Coin</button>
                <button>Inactive</button>
              </li>
            </ul>
          </div>
          {/* marketcap/volume/circulating supply */}
          <div>
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
        <span>Charts</span>
        <span>Market Pairs</span>
        <span>Social</span>
        <span>Tools</span>
        <span>Historical Data</span>
        <span>Ratings</span>
        <span>On-Chain Analysis</span>
        <span>News</span>
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
            <tr>
              <th>{props.name} Price</th>
              <td>{props.price}</td>
            </tr>
            <tr>
              <th>{props.name} ROI</th>
              <td>{props.roi}</td>
            </tr>
            <tr>
              <th>Market Rank</th>
              <td>{props.marketRank}</td>
            </tr>
            <tr>
              <th>Market Cap</th>
              <td>{props.marketCap}</td>
            </tr>
            <tr>
              <th>24 Hour Volume</th>
              <td>{props.a24hourVolume}</td>
            </tr>
            <tr>
              <th>Circulating Supply</th>
              <td>{props.circulatingSupply}</td>
            </tr>
            <tr>
              <th>Total Supply</th>
              <td>{props.totalSupply}</td>
            </tr>
            <tr>
              <th>Max Supply</th>
              <td>{props.maxSupply}</td>
            </tr>
            <tr>
              <th>All Time High</th>
              <td>{props.allTimeHigh}</td>
            </tr>
            <tr>
              <th>All Time Low</th>
              <td>{props.allTimeLow}</td>
            </tr>
            <tr>
              <th>52 Week High / Low</th>
              <td>{props.a52weekHighAndLow}</td>
            </tr>
            <tr>
              <th>90 Day High / Low</th>
              <td>{props.a90dayHighAndLow}</td>
            </tr>
            <tr>
              <th>30 Day High / Low</th>
              <td>{props.a30dayHighAndLow}</td>
            </tr>
            <tr>
              <th>7 Day High / Low</th>
              <td>{props.a7dayHighAndLow}</td>
            </tr>
            <tr>
              <th>24 Hour High / Low</th>
              <td>{props.a24hourHighAndLow}</td>
            </tr>
            <tr>
              <th>Yesterday's High / Low </th>
              <td>{props.yesterdaysHighAndLow}</td>
            </tr>
            <tr>
              <th>Yesterday's Open / Close </th>
              <td>{props.yesterdaysOpenAndClose}</td>
            </tr>
            <tr>
              <th>Yesterday's Change </th>
              <td>{props.yesterdaysChange}</td>
            </tr>
            <tr>
              <th>Yesterday's Volume </th>
              <td>{props.yesterdaysVolume}</td>
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
