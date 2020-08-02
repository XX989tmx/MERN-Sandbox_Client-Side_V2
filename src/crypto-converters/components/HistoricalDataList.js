import React from 'react';

const HistoricalDataList = (props) => {
    var dateStrings = props.dateStringArray.map((value, i) => {
        return <p>{value}</p>
    });

    var historicalPriceDataValues = props.historicalPriceData.map((value, i) => {
        return <p>{value}</p>
    });


    return (
      <div>
        
        <ul>
          <li>{dateStrings}</li>
        </ul>
        <ul>
          <li>{historicalPriceDataValues}</li>
        </ul>
      </div>
    );
}

export default HistoricalDataList;
