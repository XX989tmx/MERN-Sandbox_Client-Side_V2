import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import CryptoIndexList from '../components/CryptoIndexList';


const CryptoIndex = () => {
    const [CryptoArray, setCryptoArray] = useState([]);

    useEffect(() => {
        const fetch = (params) => {
            Axios.get(process.env.REACT_APP_BACKEND_URL + `/cryptos/index`).then((response) => {
                console.log(response.data.cryptoArray);
                setCryptoArray(response.data.cryptoArray);
            }).catch((err) => {
                
            });
        }
        fetch();
    }, []);

    return (
      <div>
        <h2>Top 100 Cryptocurrencies by Market Capitalization</h2>
        <CryptoIndexList CryptoArray={CryptoArray} />
      </div>
    );
}

export default CryptoIndex;
