import React from "react";
import AddressItem from "./AddressItem";

const AddressList = (props) => {
  return (
    <ul>
      {props.Addresses.map((v, i) => (
        <AddressItem
          key={i}
          id={v.id}
          zip_code={v.zip_code}
          country={v.country}
          name={v.name}
          todoufuken={v.todoufuken}
          address_info1={v.address_info1}
          address_info2={v.address_info2}
          phone_number={v.phone_number}
          email={v.email}
          company={v.company}
        />
      ))}
    </ul>
  );
};

export default AddressList;
