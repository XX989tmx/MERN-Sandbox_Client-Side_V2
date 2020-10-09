import React from 'react';

const FragileItem = (props) => {
    return (
        <li>
            {props.name}
            {props.code}
        </li>
    );
}

export default FragileItem;
