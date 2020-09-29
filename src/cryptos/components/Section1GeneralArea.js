import React from 'react';
import { useParams, useHistory, Link } from "react-router-dom";

const Section1GeneralArea = (props) => {
    return (
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
              <li>
                <span className="rank-wrapper">Rank {props.marketRank}</span>
              </li>
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
    );
}

export default Section1GeneralArea;
