import React from 'react';

const FcasRatingItem = (props) => {
    return (
      <div>
        <div className="center">
          {(props.fcasRating === "Attractive" && (
            <div>
              <h2>{props.name}</h2>
              <h3>
                fcasRating:
                <span style={{ backgroundColor: "#73EFBB" }}>
                  {props.fcasRating}
                </span>
              </h3>
              <h3>fcasScore: {props.fcasScore}</h3>
              <p>Last Updated Date: {props.lastRefreshed}</p>
            </div>
          )) ||
            (props.fcasRating === "Superb" && (
              <div>
                <h2>{props.name}</h2>
                <h3>
                  fcasRating:
                  <span style={{ backgroundColor: "#00E685" }}>
                    {props.fcasRating}
                  </span>
                </h3>
                <h3>fcasScore: {props.fcasScore}</h3>
                <p>Last Updated Date: {props.lastRefreshed}</p>
              </div>
            )) ||
            (props.fcasRating === "Basic" && (
              <div>
                <h2>{props.name}</h2>
                <h3>
                  fcasRating:
                  <span style={{ backgroundColor: "#BFEFDB" }}>
                    {props.fcasRating}
                  </span>
                </h3>
                <h3>fcasScore: {props.fcasScore}</h3>
                <p>Last Updated Date: {props.lastRefreshed}</p>
              </div>
            )) ||
            (props.fcasRating === "Caution" && (
              <div>
                <h2>{props.name}</h2>
                <h3>
                  fcasRating:
                  <span style={{ backgroundColor: "#FFAC70" }}>
                    {props.fcasRating}
                  </span>
                </h3>
                <h3>fcasScore: {props.fcasScore}</h3>
                <p>Last Updated Date: {props.lastRefreshed}</p>
              </div>
            )) ||
            (props.fcasRating === "Fragile" && (
              <div>
                <h2>{props.name}</h2>
                <h3>
                  fcasRating:
                  <span style={{ backgroundColor: "#FF4D4D" }}>
                    {props.fcasRating}
                  </span>
                </h3>
                <h3>fcasScore: {props.fcasScore}</h3>
                <p>Last Updated Date: {props.lastRefreshed}</p>
              </div>
            ))}
          {/* <h3>fcasRating: {fcasRating}</h3>
            <h3>fcasScore: {fcasScore}</h3> */}
        </div>
      </div>
    );
}

export default FcasRatingItem;
