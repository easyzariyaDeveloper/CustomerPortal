import React, { useState, useEffect } from "react";
import AddressItem from "./AddressItem";
import { Typography, Card, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { StyledLink } from "./styles";
import { Addresses } from "../../MockData";
const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
  card: {
    padding: "15px",
  },
  address: {
    textTransform: "uppercase",
    margin: "20px 10px 10px 10px",
  },
});
export default function AddressList() {
  const [addresses, setAddresses] = useState([]);
  const onDelete = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };
  useEffect(() => {
    setAddresses(Addresses.map((address) => ({ ...address, isEdit: false })));
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <StyledLink to="add-address">
          <AddIcon color="primary" />
          Add a new address
        </StyledLink>
      </Card>
      <br />
      <Typography className={classes.address}>
        {addresses.length} Saved Address
      </Typography>
      {addresses.map((address) => (
        <AddressItem key={address.id} address={address} onDelete={onDelete} />
      ))}
    </div>
  );
}
