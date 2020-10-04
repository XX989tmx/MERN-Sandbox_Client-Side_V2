import React from 'react';
import { useParams, useHistory, Link } from "react-router-dom";

const Section2NavigationArea = (props) => {
    return (
      <div className="section2-navigation-area">
        <div>
          <ul className="navigation-list-crypto-specific">
            <Link to={`/cryptos/currencies/${props.queryName}`}>
              <li className="navigation-item-crypto-specific-charts">
                <span className="navigation-item-crypto-specific-charts">
                  Charts
                </span>
              </li>
            </Link>
            <Link to={`/cryptos/currencies/${props.queryName}/market-pairs`}>
              <li className="navigation-item-crypto-specific-market-pairs">
                <span className="navigation-item-crypto-specific-market-pairs">
                  Market Pairs
                </span>
              </li>
            </Link>
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
            <Link to={`/cryptos/currencies/${props.queryName}/historical-data`}>
              {" "}
              <li className="navigation-item-crypto-specific-historical-data">
                <span className="navigation-item-crypto-specific-historical-data">
                  Historical Data
                </span>
              </li>
            </Link>
            <Link to={`/cryptos/currencies/${props.queryName}/ratings`}>
              <li className="navigation-item-crypto-specific-ratings">
                <span className="navigation-item-crypto-specific-ratings">
                  Ratings
                </span>
              </li>
            </Link>
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
    );
}

export default Section2NavigationArea;
