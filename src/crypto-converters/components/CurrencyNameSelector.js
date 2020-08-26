import React from "react";

import {currencyName} from "../../shared/util/currencyName";
import { useEffect } from "react";
import { useState } from "react";

const CurrencyNameSelector = () => {
  const [Option, setOption] = useState();
  useEffect(() => {
    const onLoad = (params) => {
      let currencyArray = [];
      currencyArray = currencyName.split(",");
      let selector = currencyArray.map((a) => (
        <option value={`${a}`}>{a}</option>
      ));
      setOption(selector);
    };
    onLoad();
  }, []);

  return (
    <div>
      <select name="currencyName" id="currencyName">
        {Option}
      </select>
    </div>
  );
};

export default CurrencyNameSelector;
