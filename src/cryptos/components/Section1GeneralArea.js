import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

const Section1GeneralArea = (props) => {
  const [USDPrice, setUSDPrice] = useState();
  const [BTCPrice, setBTCPrice] = useState();
  const [ETHPrice, setETHPrice] = useState();
  const [ROI, setROI] = useState();

  //row conditional
  const [MarketCapBTC, setMarketCapBTC] = useState();
  const [MarketCapETH, setMarketCapETH] = useState();
  const [MarketCapBNB, setMarketCapBNB] = useState();

  //column conditional
  const [CirculatingSupply, setCirculatingSupply] = useState();
  const [TotalSupply, setTotalSupply] = useState();
  const [MaxSupply, setMaxSupply] = useState();

  useEffect(() => {
    const onLoad = (params) => {
      setUSDPrice(props.price.usd);
      setBTCPrice(props.price.btc);
      setETHPrice(props.price.eth);
      setROI(props.roi);
      // row check
      setMarketCapBTC(props.marketCap.btc);
      setMarketCapETH(props.marketCap.eth);
      setMarketCapBNB(props.marketCap.bnb);

      //column check
      setCirculatingSupply(props.circulatingSupply);
      setTotalSupply(props.totalSupply);
      setMaxSupply(props.maxSupply);
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
          {/* <div>
            <span>profit?%</span>
          </div> */}
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
            <li className="tag-area-section1">
              {props.tags.map(function (v, i) {
                return (
                  <span className="tags-section1" key={i}>
                    {v}
                  </span>
                );
              })}
            </li>

            <li>
              <button>Coin</button>
              <button>Inactive</button>
            </li>
          </ul>
        </div>
        {/* marketcap/volume/circulating supply */}
        <div className="marketcap-volume-circulating-supply-table">
          <ul className="marketcap-volume-circulating-supply-table-list">
            <li className="marketcap-volume-circulating-supply-table-item">
              <div>
                <div className="marketcap-volume-circulating-supply-heading-area">
                  <h5 className="marketcap-volume-circulating-supply-heading">
                    <span className="mt-text"> Market Cap</span>
                  </h5>
                </div>
                <div className="marketcap-volume-circulating-supply-content-area">
                  <span className="mt-content">$ {props.marketCap.usd} USD</span>
                  <br />
                  {MarketCapBTC && (
                    <span className="mt-content">
                      {props.marketCap.btc} BTC
                    </span>
                  )}
                  <br />
                  {MarketCapETH && (
                    <span className="mt-content">
                      {props.marketCap.eth} ETH
                    </span>
                  )}
                  <br />
                  {MarketCapBNB && (
                    <span className="mt-content">
                      {props.marketCap.bnb} BNB
                    </span>
                  )}
                </div>
              </div>
            </li>
            <li className="marketcap-volume-circulating-supply-table-item">
              <div>
                <div className="marketcap-volume-circulating-supply-heading-area">
                  <h5 className="marketcap-volume-circulating-supply-heading">
                    <span className="mt-text">Volume (24h)</span>
                  </h5>
                </div>
                <div className="marketcap-volume-circulating-supply-content-area">
                  <span className="mt-content">
                    $ {props.a24hourVolume.usd} USD
                  </span>
                  <br />
                  {MarketCapBTC && (
                    <span className="mt-content">
                      {props.a24hourVolume.btc} BTC
                    </span>
                  )}
                  <br />
                  {MarketCapETH && (
                    <span className="mt-content">
                      {props.a24hourVolume.eth} ETH
                    </span>
                  )}
                  <br />
                  {MarketCapBNB && (
                    <span className="mt-content">
                      {props.a24hourVolume.bnb} BNB
                    </span>
                  )}
                </div>
              </div>
            </li>
            {/* Circulating Supply */}
            {CirculatingSupply && (
              <li className="marketcap-volume-circulating-supply-table-item">
                <div>
                  <div className="marketcap-volume-circulating-supply-heading-area">
                    <h5 className="marketcap-volume-circulating-supply-heading">
                      <span className="mt-text">Circulating Supply</span>
                    </h5>
                  </div>
                  <div className="marketcap-volume-circulating-supply-content-area">
                    <span className="mt-content">
                      {props.circulatingSupply} {props.code}
                    </span>
                  </div>
                </div>
              </li>
            )}
            {/* Total Supply */}
            {TotalSupply && (
              <li className="marketcap-volume-circulating-supply-table-item">
                <div>
                  <div className="marketcap-volume-circulating-supply-heading-area">
                    <h5 className="marketcap-volume-circulating-supply-heading">
                      <span className="mt-text">Total Supply</span>
                    </h5>
                  </div>
                  <div className="marketcap-volume-circulating-supply-content-area">
                    <span className="mt-content">
                      {props.totalSupply} {props.code}
                    </span>
                  </div>
                </div>
              </li>
            )}
            {/* Max Supply */}
            {MaxSupply && (
              <li className="marketcap-volume-circulating-supply-table-item">
                <div>
                  <div className="marketcap-volume-circulating-supply-heading-area">
                    <h5 className="marketcap-volume-circulating-supply-heading">
                      <span className="mt-text"> Max Supply</span>
                    </h5>
                  </div>
                  <div className="marketcap-volume-circulating-supply-content-area">
                    <span className="mt-content">
                      {props.maxSupply} {props.code}
                    </span>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section1GeneralArea;
