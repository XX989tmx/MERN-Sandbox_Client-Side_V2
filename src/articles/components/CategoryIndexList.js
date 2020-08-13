import React from 'react';
import CategoryIndexItems from './CategoryIndexItems';

const CategoryIndexList = (props) => {
    return (
        <ul>
            {props.CategoryIndexData.map((d) => (<CategoryIndexItems categoryName={d.categoryName} count={d.count}/>))}
        </ul>
    );
}

export default CategoryIndexList;
