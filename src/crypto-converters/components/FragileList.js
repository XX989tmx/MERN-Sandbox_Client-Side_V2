import React from 'react';
import FragileItem from './FragileItem';
import './FragileList.css';

const FragileList = (props) => {
    if (props.FragileRatedCryptoArray.length === 0) {
      return (
        <div>
          <h3>No Data</h3>
        </div>
      );
    }

    return (
      <tr className="fragile-list-list">
        {props.FragileRatedCryptoArray.map((c, i) => (
          <FragileItem
            key={c.index}
            name={c.name}
            queryName={c.queryName}
            code={c.code}
            price={c.price}
            roi={c.roi}
            marketRank={c.marketRank}
            marketCap={c.marketCap}
            a24hourVolume={c.a24hourVolume}
            circulatingSupply={c.circulatingSupply}
            totalSupply={c.totalSupply}
            maxSupply={c.maxSupply}
            allTimeHigh={c.allTimeHigh}
            allTimeLow={c.allTimeLow}
            a52weekHigh={c.a52weekHigh}
            a52weekLow={c.a52weekLow}
            a90dayHigh={c.a90dayHigh}
            a90dayLow={c.a90dayLow}
            a30dayHigh={c.a30dayHigh}
            a30dayLow={c.a30dayLow}
            a7dayHigh={c.a7dayHigh}
            a7dayLow={c.a7dayLow}
            a24hourHigh={c.a24hourHigh}
            a24hourLow={c.a24hourLow}
            yesterdaysHigh={c.yesterdaysHigh}
            yesterdaysLow={c.yesterdaysLow}
            yesterdaysOpen={c.yesterdaysOpen}
            yesterdaysClose={c.yesterdaysClose}
            yesterdaysChange={c.yesterdaysChange}
            yesterdaysVolume={c.yesterdaysVolume}
            website={c.website}
            announcement={c.announcement}
            explorer={c.explorer}
            message_board={c.message_board}
            chat={c.chat}
            sourceCode={c.sourceCode}
            technicalDocumentation={c.technicalDocumentation}
            tags={c.tags}
            icon={c.icon}
            report={c.report}
            tokenInsightRating={c.tokenInsightRating}
            dynamicPerformanceScore={c.dynamicPerformanceScore}
            fcasRatingInitial={c.fcasRatingInitial}
            fcasScore={c.fcasScore}
          />
        ))}
      </tr>
    );
}

export default FragileList;
