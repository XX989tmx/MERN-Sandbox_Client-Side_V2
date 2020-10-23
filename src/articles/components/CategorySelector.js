import React from 'react';

const CategorySelector = (props) => {
    return (
      <div>
        <label>
          Category
          <select
            className="selector"
            name="Category"
            id="categories"
            onChange={props.sortByCategory}
          >
            <option>sort</option>
            {props.categoryNames}
          </select>
        </label>
      </div>
    );
}

export default CategorySelector;
