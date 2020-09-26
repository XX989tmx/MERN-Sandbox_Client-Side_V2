import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
const CryptoSpecificCurrencyItem = (props) => {
  return (
    <div className="crypto-specific-item-main-container">
      <div>
        {/* upper-area1 */}
        <div>
          <div>
            <div>
              <div>
                <img src={props.icon} alt="" />
              </div>
              <div>
                <h1>{props.name}</h1>
                {props.code}
              </div>
            </div>
          </div>
          <div>
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
          <div>
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
        <div>
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
      <div>
        <span>Charts</span>
        <span>Market Pairs</span>
        <span>Social</span>
        <span>Tools</span>
        <span>Historical Data</span>
        <span>Ratings</span>
        <span>On-Chain Analysis</span>
        <span>News</span>
      </div>
      <div>{props.name} Charts</div>
      <div>
        <div>
          <h1>articles</h1>
        </div>
        <div>
          <h1>tables</h1>
          <table>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
          </table>
        </div>
      </div>

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
