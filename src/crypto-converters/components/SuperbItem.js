import React from 'react';

const SuperbItem = (props) => {
    return (
        <li>
            {props.name}
            {props.code}
        </li>
    );
}

export default SuperbItem;
