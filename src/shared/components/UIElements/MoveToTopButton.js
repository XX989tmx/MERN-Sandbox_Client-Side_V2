import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import './MoveToTopButton.css';

const MoveToTopButton = () => {
  const moveToTopButton = (params) => {
    window.scrollTo(0, 0);
  }
  return <div className="move-to-top-button" onClick={moveToTopButton}><ExpandLessIcon style={{color:'white', position:'relative',top:'19px',left:'19px'}}/></div>;
}

export default MoveToTopButton;
