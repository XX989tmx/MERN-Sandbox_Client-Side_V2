import React from 'react';
import CryptoSpecificCurrencyItem from './CryptoSpecificCurrencyItem';

const CryptoSpecificCurrencyList = (props) => {
    return (
      <div>
        {props.MatchedCrypto.map((v, index) => (
          <CryptoSpecificCurrencyItem
            key={index}
            name={v.name}
            code={v.code}
            price={v.price}
            roi={v.roi}
            marketRank={v.marketRank}
            marketCap={v.marketCap}
            a24hourVolume={v.a24hourVolume}
            circulatingSupply={v.circulatingSupply}
            totalSupply={v.totalSupply}
            maxSupply={v.maxSupply}
            allTimeHigh={v.allTimeHigh}
            allTimeLow={v.allTimeLow}
            a52weekHighAndLow={v.a52weekHighAndLow}
            a90dayHighAndLow={v.a90dayHighAndLow}
            a30dayHighAndLow={v.a30dayHighAndLow}
            a7dayHighAndLow={v.a7dayHighAndLow}
            a24hourHighAndLow={v.a24hourHighAndLow}
            yesterdaysHighAndLow={v.yesterdaysHighAndLow}
            yesterdaysOpenAndClose={v.yesterdaysOpenAndClose}
            yesterdaysChange={v.yesterdaysChange}
            yesterdaysVolume={v.yesterdaysVolume}
            website={v.website}
            sourceCode={v.sourceCode}
            technicalDocumentation={v.technicalDocumentation}
            icon={v.icon}
            tokenInsightRating={v.tokenInsightRating}
            dynamicPerformanceScore={v.dynamicPerformanceScore}
            fcasRating={v.fcasRating}
          />
        ))}
      </div>
    );
}

export default CryptoSpecificCurrencyList;
