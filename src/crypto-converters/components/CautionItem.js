import React from 'react';

const CautionItem = (props) => {
    return (
        <li>
            {props.name}
            {props.code}
        </li>
    );
}

export default CautionItem;
