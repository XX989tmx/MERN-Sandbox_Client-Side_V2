import React, { useState } from 'react';
import Button from '../../shared/components/FormElements/Button';

import { useHttpClient } from "../../shared/hooks/http-hook";
import CryptoDataPease from './CryptoDataPease';

const GetCryptoData = (props) => {
    // const [cryptoData, setCryptoData] = useState();
    // const { isLoading, error, sendRequest, clearError } = useHttpClient();

    // const getRequestForCryptoDataSubmitHandler = async (event) => {
    //     event.preventDefault();

    //     try {
    //       const response = await fetch(
    //         "http://localhost:5000/api/get_external_api/crypto_currency"
    //       );
    //       const responseData = await response.json();
    //         setCryptoData(responseData);
    //         console.log(responseData.exchange_rate);
    //     } catch (error) {
            
    //     }
        

    // }
    console.log(props.exchange_rate);

    return (
      <div>
        {/* <form>
          <Button onClick={getRequestForCryptoDataSubmitHandler}>
            Get Data
          </Button>
        </form> */}

        <p>{props.exchange_rate}</p>
      </div>
    );
}

export default GetCryptoData;
