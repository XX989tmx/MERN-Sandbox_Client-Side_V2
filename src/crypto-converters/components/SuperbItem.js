import React from "react";
import { Link } from "react-router-dom";
import './SuperbItem.css';


const SuperbItem = (props) => {
  return (
    <Link to={`/cryptos/currencies/${props.queryName}`}>
      <td className="fcas-list-td-image">
        <img className="crypto-icon-fcas-page" src={props.icon} />
      </td>
      <td className="fcas-list-td-name">{props.name}</td>
      <td className="fcas-list-td-code">{props.code}</td>
      <td className="fcas-list-td-fcasscore">{props.fcasScore}</td>
      <td className="fcas-list-td-usd-price">{props.price.usd}</td>
      <td className="fcas-list-td-marketcap">{props.marketRank}</td>
    </Link>
  );
};

export default SuperbItem;
