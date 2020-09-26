import React from 'react';
import CryptoIndexItem from './CryptoIndexItem';

const CryptoIndexList = (props) => {
    return (
      <div>
        {props.CryptoArray.map((c) => (
          <CryptoIndexItem
            key={c.index}
            name={c.name}
            queryName={c.queryName}
            code={c.code}
            price={c.price}
            icon={c.icon}
            // roi={c.roi}
            marketRank={c.marketRank}
            marketCap={c.marketCap}
            a24hourVolume={c.a24hourVolume}
            circulatingSupply={c.circulatingSupply}
            fcasRating={c.fcasRating}
          />
        ))}
      </div>
    );
}

export default CryptoIndexList;
