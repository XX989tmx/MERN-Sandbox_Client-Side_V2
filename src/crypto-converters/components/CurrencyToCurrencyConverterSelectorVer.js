import React from "react";

const CurrencyToCurrencyConverterSelectorVer = (props) => {
  return (
    <div>
      <div className="currency-exchange-rate-selector-form">
        <form onSubmit={props.exchangeRateSubmithandler}>
          <div className="user-input-currency-amount">
            <span style={{ marginRight: "30px", fontWeight: "600" }}>
              Amount
            </span>
            <input
              type="text"
              onChange={props.userInputCurrencyAmountChangeHandler}
              value={props.userInputCurrencyAmount}
            ></input>
          </div>
          <div>
            <span style={{ marginRight: "100px", fontWeight: "600" }}>
              Fiat
            </span>
            <span style={{ marginLeft: "130px", fontWeight: "600" }}>
              Crypto
            </span>
          </div>
          <div className="from-currency-area">
            <span className="from-text" style={{ fontWeight: "600" }}>
              From
            </span>
            <select
              className="from-currency1"
              value={props.FromCurrency1}
              onChange={props.FromCurrencyChangehandler1}
            >
              <option value="">Currency</option>
              {props.FiatCurrencyCodeOptions}
            </select>
            <select
              className="from-currency2"
              value={props.FromCurrency2}
              onChange={props.FromCurrencyChangehandler2}
            >
              <option value="">Crypto</option>
              {props.CryptoCurrencyCodeOptions}
            </select>
          </div>
          <div className="to-currency-area">
            <span className="to-text" style={{ fontWeight: "600" }}>
              To
            </span>
            <select
              className="to-currency1"
              value={props.ToCurrency1}
              onChange={props.ToCurrencyChangehandler1}
            >
              <option value="">Currency</option>
              {props.FiatCurrencyCodeOptions}
            </select>
            <select
              className="to-currency2"
              value={props.ToCurrency2}
              onChange={props.ToCurrencyChangehandler2}
            >
              <option value="">Crypto</option>
              {props.CryptoCurrencyCodeOptions}
            </select>
          </div>
          <div className="exchange-rate-submit">
            <button type="submit" value="Submit">
              get exchange rate
            </button>
          </div>
        </form>
      </div>
      <div className="currency-exchange-rate-selector-result">
        <h5>
          {props.userInputCurrencyAmount} {props.ExchangeRate.FromCurrencyName}{" "}
          is worth:
        </h5>
        <h3>
          {props.Result && <span style={{fontSize:'24px',marginRight:'40px'}}> {new Number(props.Result).toFixed(2)}</span>}
          <span style={{fontSize:'19px'}}>{props.ExchangeRate.ToCurrencyName}</span>
        </h3>
        <h4>
          <span>last updated at</span>{" "}
          <span>{props.ExchangeRate.LastRefreshed}</span>
        </h4>
      </div>
    </div>
  );
};

export default CurrencyToCurrencyConverterSelectorVer;
