import React from 'react';
import CategoryIndexItems from './CategoryIndexItems';

const CategoryIndexList = (props) => {
    return (
      <ul class="list-group">
        {props.CategoryIndexData.map((d,i) => (
          <CategoryIndexItems key={i} categoryName={d.categoryName} count={d.count} />
        ))}
      </ul>
    );
}

export default CategoryIndexList;
