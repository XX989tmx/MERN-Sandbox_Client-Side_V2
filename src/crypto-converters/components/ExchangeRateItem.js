import React from 'react';

const ExchangeRateItem = (props) => {
    return (
      <div>
        <h5>1 {props.FromCurrencyName} is worth:</h5>
        <h3>
          {props.ExchangeRate} <span>{props.ToCurrencyName}</span>
        </h3>

        <p>last updated at: {props.LastRefreshed}</p>
      </div>
    );
}

export default ExchangeRateItem;
