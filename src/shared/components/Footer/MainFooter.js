import React from 'react';

import './MainFooter.css';

const MainFooter = (props) => {
    return (
        <footer className="main-footer">{props.children}</footer>
    );
}

export default MainFooter;
