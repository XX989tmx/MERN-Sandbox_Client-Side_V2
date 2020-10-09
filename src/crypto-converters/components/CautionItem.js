import React from 'react';
import { Link } from 'react-router-dom';

const CautionItem = (props) => {
    return (
      <Link to={`/cryptos/currencies/${props.queryName}`}>
        <li>
          {props.name}
          {props.code}
        </li>
      </Link>
    );
}

export default CautionItem;
