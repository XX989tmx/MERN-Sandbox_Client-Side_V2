import React, { useContext, useState, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

const ShowUserDetailInfo = () => {
  const auth = useContext(AuthContext);
  const userId = useParams().userId;
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [country, setCountry] = useState();
  const [zipcode, setZipcode] = useState();
  const [todoufuken, setTodoufuken] = useState();
  const [shichousonku, setShichousonku] = useState();
  const [banchi, setBanchi] = useState();
  const [nameOfResidence, setNameOfResidence] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const [exsistingUserDetailInfo, setExsistingUserDetailInfo] = useState();

  useEffect(() => {
    const fetchUserDetailInfo = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/users/${userId}/user_detail_info/show`
        );
        console.log(responseData);
        
        setCountry(responseData.country);
        setZipcode(responseData.zip_code);
        setTodoufuken(responseData.todoufuken);
        setShichousonku(responseData.shichousonku);
        setBanchi(responseData.banchi);
        setNameOfResidence(responseData.name_of_residence);
        setPhoneNumber(responseData.phone_number);
      } catch (err) {}
    };
    fetchUserDetailInfo();
  }, [sendRequest]);

  return (
    <div>
      <h1>{country}</h1>
      <h1>{zipcode}</h1>
      <h1>{todoufuken}</h1>
      <h1>{shichousonku}</h1>
      <h1>{banchi}</h1>
      <h1>{nameOfResidence}</h1>
      <h1>{phoneNumber}</h1>
    </div>
  );
};

export default ShowUserDetailInfo;
