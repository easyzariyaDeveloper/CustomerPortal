import React, { useState } from "react";
import { Box, Header, Button } from "../styles";
import { Addresses } from "../MockData";
import { AddressList } from "./styles";
import AddressItem from "./AddressItem";



export default function Address() {
  const [addresses, setAddresses] = useState(
    Addresses.map((address) => ({ ...address, disabled: true }))
  );
  const onChange = (id, e) => {
    const { target } = e;
    setAddresses(
      [...addresses].map((address) =>
        address.id === id
          ? { ...address, [target.name]: target.value }
          : address
      )
    );
  };
  const onEdit = (id) => {
    console.log(id);
    setAddresses(
      [...addresses].map((address) =>
        address.id === id
          ? { ...address, disabled: !address.disabled }
          : address
      )
    );
  };
  const onDelete = (id) => {
    const newAddresses = [...addresses].filter((address) => address.id !== id);
    setAddresses(newAddresses);
  };
  const addAddress = () => {
    const id = addresses.length + 1;
    console.log("address to be added");
  };
  return (
    <Box>
      <Header>Address List</Header>
      <AddressList>
        {addresses.map((addressObj) => (
          <AddressItem
            key={addressObj.id}
            address={addressObj}
            onChange={onChange}
            onEdit={onEdit}
            onDelete={onDelete}
            disabled={addressObj.disabled}
          />
        ))}
      </AddressList>
      <Button onClick={addAddress}>Add New</Button>
    </Box>
  );
}
