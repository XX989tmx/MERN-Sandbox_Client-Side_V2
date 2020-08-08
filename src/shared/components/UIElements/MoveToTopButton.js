import React from 'react';

import './MoveToTopButton.css';

const MoveToTopButton = () => {
  const moveToTopButton = (params) => {
    window.scrollTo(0, 0);
  }
  return <div className="move-to-top-button" onClick={moveToTopButton}></div>;
}

export default MoveToTopButton;
