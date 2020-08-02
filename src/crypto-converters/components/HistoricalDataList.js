import React from 'react';

import name from './HistoricalDataList.css';

const HistoricalDataList = (props) => {
    var dateStrings = props.dateStringArray.map((value, i) => {
        return <p>{value}</p>
    });

    var historicalPriceDataValues = props.historicalPriceData.map((value, i) => {
        return <p>{value}</p>
    });


    return (
      <div className="historicalData-container">
        
        <ul className="dateStringList">
          <li>{dateStrings}</li>
        </ul>
        <ul className="historicalPriceList">
          <li>{historicalPriceDataValues}</li>
        </ul>
      </div>
    );
}

export default HistoricalDataList;
