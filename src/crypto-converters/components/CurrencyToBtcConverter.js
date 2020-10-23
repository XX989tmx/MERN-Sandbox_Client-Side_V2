import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
const CurrencyToBtcConverter = (props) => {
    return (
      <div>
        <form className="center" onSubmit={props.cryptoConvertionSubmitHandler}>
          {/* <input id="currency" type="text" label="Currency" />
            <input id="value" type="text" label="Value" /> */}

          {/* <Input
              id="currency"
              element="input"
              label="Currency"
              placeholder="Your Currency"
              // autoFocus="true"
              errorText="Please enter a valid currency."
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
            /> */}

          <select name="currency" id="currency">
            <option value="first" selected>
              choose your currency
            </option>
            <option value="JPY">JPY</option>
            <option value="USD">USD</option>
            <option value="AUD">AUD</option>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CLP">CLP</option>
            <option value="CNY">CNY</option>
            <option value="DKK">DKK</option>
            <option value="EUR">EUR</option>
            <option value="GBP">EUR</option>
            <option value="HKD">HKD</option>
            <option value="INR">INR</option>
            <option value="ISK">INR</option>
            <option value="KRW">KRW</option>
            <option value="NZD">NZD</option>
            <option value="PLN">PLN</option>
            <option value="RUB">RUB</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="TWD">TWD</option>
          </select>

          <Input
            id="value"
            element="input"
            label="Value"
            placeholder="Value  $"
            errorText="Please enter a valid value."
            validators={[VALIDATOR_REQUIRE()]}
            onInput={props.inputHandler}
          />
          <Button btnBlack type="submit">
            Convert
          </Button>
        </form>
      </div>
    );
}

export default CurrencyToBtcConverter;
