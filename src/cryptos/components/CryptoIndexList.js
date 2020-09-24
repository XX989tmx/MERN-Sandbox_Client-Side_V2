import React from 'react';
import CryptoIndexItem from './CryptoIndexItem';

const CryptoIndexList = (props) => {
    return (
      <ul>
        {props.CryptoArray.map((c) => (
              <CryptoIndexItem
                key={c.index}
                name={c.name}
                code={c.code}
                price={c.price}
                // roi={c.roi}
                marketRank={c.marketRank}
                marketCap={c.marketCap}
                a24hourVolume={c.a24hourVolume}
                circulatingSupply={c.circulatingSupply}
                fcasRating={c.fcasRating}
              />
            )
        )}
        
      </ul>
    );
}

export default CryptoIndexList;
