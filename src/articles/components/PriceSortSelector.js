import React from 'react';

const PriceSortSelector = (props) => {
    return (
      <div>
        <label>
          price sort
          <select
            className="selector"
            name="price"
            id="price"
            onChange={props.sortByPrice}
          >
            <option value="default" selected>
              sort
            </option>
            <option value="0~499">~499</option>
            <option value="500~999">500~999</option>
            <option value="1000~1999">1000~1999</option>
            <option value="2000~4999">2000~4999</option>
            <option value="5000~9999">5000~9999</option>
            <option value="10000~">10000~</option>
          </select>
        </label>
      </div>
    );
}

export default PriceSortSelector;
