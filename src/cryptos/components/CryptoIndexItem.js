import { useParams, useHistory, Link } from "react-router-dom";
import React from "react";

const CryptoIndexItem = (props) => {
  return (
    <li>
      <Link to={`/cryptos/currencies/${props.queryName}`}>
      <img src={props.icon} alt=""/>
        <h1>{props.queryName}</h1>
        <span>{props.marketRank}</span> <h5>{props.name}</h5>
        {props.code}
        {props.price}
        {props.marketCap}
        {props.a24hourVolume}
        {props.circulatingSupply}
        {props.fcasRating}
      </Link>
    </li>
  );
};

export default CryptoIndexItem;
