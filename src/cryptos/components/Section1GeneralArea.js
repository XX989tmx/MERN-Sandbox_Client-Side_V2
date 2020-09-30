import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

const Section1GeneralArea = (props) => {
  const [USDPrice, setUSDPrice] = useState();
  const [BTCPrice, setBTCPrice] = useState();
  const [ETHPrice, setETHPrice] = useState();
  const [ROI, setROI] = useState();

  useEffect(() => {
    const onLoad = (params) => {
      setUSDPrice(props.price.usd);
      setBTCPrice(props.price.btc);
      setETHPrice(props.price.eth);
      setROI(props.roi);
    };
    onLoad();
  }, []);

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
            {USDPrice && (
              <span className="crypto-price">$ {props.price.usd} USD</span>
            )}{" "}
            <br />
            {BTCPrice && <span> {props.price.btc} BTC</span>}
            <br />
            {ETHPrice && <span> {props.price.eth} ETH</span>}
            <br />
            {ROI ? <span>{props.roi}</span> : <span>No Data</span>}
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
            {props.website.map(function (v, i) {
              return (
                <li key={i}>
                  <a href={v} target="_blank" rel="noopener noreferrer">
                    Website {i + 1}
                  </a>{" "}
                </li>
              );
            })}
            {props.announcement.map(function (v, i) {
              return (
                <li key={i}>
                  <a href={v} target="_blank" rel="noopener noreferrer">
                    Announcement {i + 1}
                  </a>{" "}
                </li>
              );
            })}
            {props.explorer.map(function (v, i) {
              return i === 0 ? (
                <li key={i}>
                  <a href={v} target="_blank" rel="noopener noreferrer">
                    Explorer
                  </a>{" "}
                </li>
              ) : (
                <a href={v} target="_blank" rel="noopener noreferrer">
                  {i + 1}
                </a>
              );
            })}

            {props.message_board.map(function (v, i) {
              return (
                <li key={i}>
                  <a href={v} target="_blank" rel="noopener noreferrer">
                    Message Board {i + 1}
                  </a>{" "}
                </li>
              );
            })}

            {props.chat.map(function (v, i) {
              return (
                <li key={i}>
                  <a href={v} target="_blank" rel="noopener noreferrer">
                    Chat {i + 1}
                  </a>{" "}
                </li>
              );
            })}

            {props.sourceCode.map(function (v, i) {
              return (
                <li key={i}>
                  <a href={v} target="_blank" rel="noopener noreferrer">
                    Source Code {i + 1}
                  </a>{" "}
                </li>
              );
            })}

            {props.technicalDocumentation.map(function (v, i) {
              return (
                <li key={i}>
                  <a href={v} target="_blank" rel="noopener noreferrer">
                    Technical Documentation {i + 1}
                  </a>{" "}
                </li>
              );
            })}

            {props.tags.map(function (v, i) {
              return <span key={i}>{v}</span>;
            })}

            <li>
              <button>Coin</button>
              <button>Inactive</button>
            </li>
          </ul>
        </div>
        {/* marketcap/volume/circulating supply */}
        <div className="marketcap-volume-circulating-supply-table">
          {/* row1 header*/}
          <tr>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
            <th>Total Supply</th>
            <th>Max Supply</th>
          </tr>
          {/* row2 usd & self code*/}
          <tr>
            <td>$ {props.marketCap.usd}</td>
            <td>$ {props.a24hourVolume.usd}</td>
            <td>
              {props.circulatingSupply} {props.code}
            </td>
            <td>
              {props.totalSupply} {props.code}
            </td>
            <td>
              {props.maxSupply} {props.code}
            </td>
          </tr>

          {/* row3 btc*/}
          <tr>
            <td>{props.marketCap.btc} BTC</td>
            <td>{props.a24hourVolume.btc} BTC</td>
          </tr>

          {/* row4 eth */}
          <tr>
            <td>{props.marketCap.eth} ETH</td>
            <td>{props.a24hourVolume.eth} ETH</td>
          </tr>

          {/* row5 bnb */}
          <tr>
            <td>{props.marketCap.bnb} BNB</td>
            <td>{props.a24hourVolume.bnb} BNB</td>
          </tr>

          
        </div>
      </div>
    </div>
  );
};

export default Section1GeneralArea;
