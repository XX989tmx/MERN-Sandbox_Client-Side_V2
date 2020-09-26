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
          <span>{props.marketRank}</span>
        </td>
        <td className="td-crypto-index-item3">
          <span>
            <img className="crypto-icon" src={props.icon} alt="" />
          </span>{" "}
          <span>{props.name}</span> <span>{props.code}</span>
        </td>
        <td className="td-crypto-index-item4">
          <span>{props.marketCap}</span>
        </td>
        <td className="td-crypto-index-item5">
          <span>{props.price}</span>
        </td>
        <td className="td-crypto-index-item6">
          <span>0.00%</span>
        </td>
        <td className="td-crypto-index-item7">
          <span>{props.a24hourVolume}</span>
        </td>
        <td className="td-crypto-index-item8">
          <span>{props.circulatingSupply}</span>
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
