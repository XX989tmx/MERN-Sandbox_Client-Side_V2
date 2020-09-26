import { useParams, useHistory, Link } from "react-router-dom";
import React from "react";
import "./CryptoIndexItem.css";
const CryptoIndexItem = (props) => {
  return (
    <tr className="table-row-crypto-index-item">
      <Link to={`/cryptos/currencies/${props.queryName}`}>
        {/* <span> */}
        <td className="td-crypto-index-item1">
          <span></span>
        </td>
        <td className="td-crypto-index-item2">
          <span className="market-rank">{props.marketRank}</span>
        </td>
        <td className="td-crypto-index-item3">
          <span>
            <img className="crypto-icon" src={props.icon} alt="" />
          </span>{" "}
          <span className="coin-name">{props.name}</span>{" "}
          <span className="currency-code">{props.code}</span>
        </td>
        <td className="td-crypto-index-item4">
          <span className="market-cap">{props.marketCap}</span>
        </td>
        <td className="td-crypto-index-item5">
          <span className="coin-price">{props.price}</span>
        </td>
        <td className="td-crypto-index-item6">
          <span className="a24hour-change">0.00%</span>
        </td>
        <td className="td-crypto-index-item7">
          <span className="a24hour-volume">{props.a24hourVolume}</span>
        </td>
        <td className="td-crypto-index-item8">
          <span className="circulating-supply">{props.circulatingSupply}</span>
        </td>
        <td className="td-crypto-index-item9">
          <span>Price Graph</span>
        </td>
        <td className="td-crypto-index-item10">
          <span></span>
        </td>

        {/* <h1>{props.queryName}</h1> */}
        {/* {props.fcasRating} */}
        {/* </span> */}
      </Link>
    </tr>
  );
};

export default CryptoIndexItem;
