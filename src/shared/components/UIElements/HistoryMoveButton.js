import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../FormElements/Button";

const HistoryMoveButton = (props) => {
  const history = useHistory();
  if (props.goBack1) {
    const goBack1 = (event) => {
      event.preventDefault();
      window.history.go(-1);
    };

    return (
      <Button onClick={goBack1} btnBlack>
        {props.children}
      </Button>
    );
  } else if (props.goBack2) {
    const goBack2 = (event) => {
      event.preventDefault();
      window.history.go(-2);
    };
    return (
      <div>
        <Button onClick={goBack2} btnBlack>
          {props.children}
        </Button>
      </div>
    );
  } else if (props.goForward1) {
    const goForward1 = (event) => {
      event.preventDefault();
      window.history.go(1);
    };
    return (
      <div>
        <Button onClick={goForward1} btnBlack>
          {props.children}
        </Button>
      </div>
    );
  } else if (props.goForward2) {
    const goForward2 = (event) => {
      event.preventDefault();
      window.history.go(2);
    };
    return (
      <div>
        <Button onClick={goForward2} btnBlack>
          {props.children}
        </Button>
      </div>
    );
  } else if (props.specificLocation) {
    const specificLocation = (event) => {
      event.preventDefault();

      history.push(props.specificLocation);
    };
    return (
      <div>
        <Button onClick={specificLocation} btnBlack>
          {props.children}
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Button btnBlack>{props.children}</Button>
    </div>
  );
};

export default HistoryMoveButton;
