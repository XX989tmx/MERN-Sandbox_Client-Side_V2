import React from 'react';
import { Link } from 'react-router-dom';

const AttractiveItem = (props) => {
    return (
      <Link to={`/cryptos/currencies/${props.queryName}`}>
        <li>
          {props.name}
          {props.code}
        </li>
      </Link>
    );
}

export default AttractiveItem;
