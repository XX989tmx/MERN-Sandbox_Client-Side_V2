import React, {useState} from "react";

import "./VideoPlayerBox.css";

const VideoPlayerBox = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ShowInfoBox, setShowInfoBox] = useState(false);

  const openNewWindowByClick = (event) => {
    event.preventDefault();
    window.open("http://localhost:3000/auth");
  };

  const checkLoaded = (params) => {
    setIsLoaded(true);
    //  window.open("http://localhost:3000/auth");
  }

  const openInfoBox = (params) => {
     setShowInfoBox(true);
  };

  const closeInfoBox = (params) => {
    setShowInfoBox(false);
  };

  const showModalWithTimer = (params) => {
    setTimeout(() => {
      window.prompt("singup", "defaultText");
    }, 5000);
  }

  return (
    <div>
      video player window div. place iFrame tag here. video urlをpropsで渡す？？
      <iframe
        src="https://player.vimeo.com/video/439287536"
        width="600"
        height="400"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        onClick={openNewWindowByClick}
        onLoad={checkLoaded}
        onMouseOver={openInfoBox}
        onMouseLeave={closeInfoBox}
        onLoad={showModalWithTimer}
      ></iframe>
      <button onClick={openNewWindowByClick}>click</button>
      {isLoaded ? (
        <div>load was completed. video is ready for playing</div>
      ) : (
        <div> loading...</div>
      )}
      {ShowInfoBox && (
        <div>
          <h1>video </h1>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerBox;
