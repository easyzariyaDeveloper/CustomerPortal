import React, { useState } from "react";
import { Addresses } from "../../MockData";
import MobilePageLayout from "../../../../Layout/MobileView";
import { AddressFormWrapper } from "./styles";
import {
  TextField,
  makeStyles,
  Card,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
} from "@material-ui/core";
import ActionButton from "../../../Common/ActionButton";
const useStyles = makeStyles({
  root: {
    padding: "8px",
    margin: "10px 0",
  },
  textInput: { margin: "10px 0" },
});
export default function index({ location }) {
  const classes = useStyles();
  const params = location.pathname.split("/");
  const path = params[1];
  const addressModel = {
    label: "",
    id: Addresses.length + 1,
    line1: "",
    line2: "",
    city: "",
    state: "",
    pincode: "",
    name: "",
    phone: "",
    altphone: "",
  };
  const [address, setAddress] = useState(
    path === "add-address"
      ? addressModel
      : Addresses.find((addressObj) => addressObj.id === parseInt(params[2]))
  );
  console.log(address);
  const onChange = ({ target }) =>
    setAddress({ ...address, [target.name]: target.value });
  return (
    <MobilePageLayout>
      <Card className={classes.root}>
        <TextField
          name="pincode"
          required
          fullWidth
          value={address.pincode}
          onChange={onChange}
          label="Pincode"
          className={classes.textInput}
        />

        <TextField
          className={classes.textInput}
          id="standard-basic"
          name="line1"
          required
          fullWidth
          value={address.line1}
          onChange={onChange}
          label="House No., Building name"
        />
        <TextField
          className={classes.textInput}
          name="line2"
          required
          fullWidth
          value={address.line2}
          onChange={onChange}
          label="Road Name, Area, Colony"
        />
        <Box display="flex" justifyContent="space-between">
          <TextField
            className={classes.textInput}
            name="city"
            required
            value={address.city}
            onChange={onChange}
            label="City"
          />
          <TextField
            className={classes.textInput}
            name="state"
            required
            value={address.state}
            onChange={onChange}
            label="State"
          />
        </Box>
        <TextField
          className={classes.textInput}
          name="landmark"
          fullWidth
          value={address.landmark}
          onChange={onChange}
          label="Landmark (Optional)"
        />
      </Card>
      <Card className={classes.root}>
        <TextField
          name="name"
          required
          fullWidth
          value={address.name}
          onChange={onChange}
          label="Name"
          className={classes.textInput}
        />
        <TextField
          name="phone"
          required
          fullWidth
          value={address.phone}
          onChange={onChange}
          label="10-digit mobile number"
          className={classes.textInput}
        />
        <TextField
          name="altphone"
          fullWidth
          value={address.altphone}
          onChange={onChange}
          label="Alternate Phone Number (Optional)"
          className={classes.textInput}
        />
      </Card>
      <Card className={classes.root}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Address Type</FormLabel>
          <br />
          <RadioGroup name="label" value={address.label} onChange={onChange}>
            <FormControlLabel
              value="home"
              control={<Radio />}
              label="Home Address"
            />
            <FormControlLabel
              value="work"
              control={<Radio />}
              label="Work/Office Address"
            />
          </RadioGroup>
        </FormControl>
      </Card>
      <Box display="flex" justifyContent="center">
        <ActionButton label="Save" />
      </Box>
    </MobilePageLayout>
  );
}
