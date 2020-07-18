import React from "react";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="main-container">
        <div className="post-form-area">
          <h1 className="center">AboutUs</h1>
          <div>
            <iframe
              src="https://player.vimeo.com/video/439287536"
              width="600"
              height="400"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="side-container"></div>
    </div>
  );
};

export default AboutUs;
