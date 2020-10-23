import React from 'react';

const SortArticleSelector = (props) => {
    return (
      <div>
        <label>
          Sort Article
          <select
            name="sort"
            id="sortArticleMain"
            onChange={props.sortArticleMainHandler}
            className="selector"
          >
            <option value="default" selected>
              sort
            </option>
            <option value="HighestToCheapest">From Highest Price</option>
            <option value="CheapestToHighest">From Lowest Price</option>
            {/* <option value="lowest rating">lowest rating</option> */}
            <option value="FromOldest">From Oldest</option>
            <option value="FromLatest">From Latest</option>
            {/* <option value="Most viewed">Most viewed</option>
                    <option value="Least viewed">Least viewed</option>
                    <option value="Highest Favorite Count">
                      Highest Favorite Count
                    </option>
                    <option value="Lowest Favorite Count">
                      Lowest Favorite Count
                    </option> */}
            {/* <option value="Highest Cited">Highest Cited</option>
                  <option value="Lowest Cited">Lowest Cited</option> */}
            {/* <option value="stock">stock</option>
                    <option value="Free Shipment">Free Shipment</option> */}
          </select>
        </label>
      </div>
    );
}

export default SortArticleSelector;
