import React from 'react';

const TagSelector = (props) => {
    return (
      <div>
        <label>
          Tag
          <select
            className="selector"
            name="Tag"
            id="tags"
            onChange={props.sortByTag}
          >
            <option>sort</option>
            {props.tagnames}
          </select>
        </label>
      </div>
    );
}

export default TagSelector;
