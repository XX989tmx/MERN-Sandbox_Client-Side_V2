import React from 'react';
import ReactLoaderSpinner from 'react-loader-spinner';

const MyLoadingSpinner = () => {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <div>
          {" "}
          <div>
            <ReactLoaderSpinner
              type="Grid"
              color="#00BFFF"
              height={50}
              width={50}
            />
          </div>
          <div>
            <span style={{ color: "#00BFFF" }}>Loading...</span>
          </div>
        </div>
      </div>
    );
}

export default MyLoadingSpinner;
