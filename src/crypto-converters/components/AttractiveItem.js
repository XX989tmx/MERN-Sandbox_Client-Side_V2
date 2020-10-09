import React from 'react';

const AttractiveItem = (props) => {
    return (
        <li>
            {props.name}
            {props.code}
        </li>
    );
}

export default AttractiveItem;
