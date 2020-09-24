import React from 'react';

const CryptoIndexItem = (props) => {
    return (
      <li>
        <span>
          {props.marketRank}
        </span>{" "}
        <h5>{props.name}</h5>
        {props.code}
        {props.price}
        {props.marketCap}
        {props.a24hourVolume}
        {props.circulatingSupply}
        {props.fcasRating}
      </li>
    );
}

export default CryptoIndexItem;
