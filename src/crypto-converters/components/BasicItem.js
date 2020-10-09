import React from 'react';

const BasicItem = (props) => {
    return (
        <li>
            {props.name}
            {props.code}
        </li>
    );
}

export default BasicItem;
