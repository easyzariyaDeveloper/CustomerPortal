import React, { useState } from "react";
import { Addresses } from "../../MockData";
import MobilePageLayout from "../../../../Layout/MobileView";
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
    margin: "10px 0",
    padding: "10px 0",
  },
  textInput: { margin: "10px 8px" },
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
  const pageName =
    path === "add-address" ? "Add a new address" : "Edit Address";
  const onChange = ({ target }) =>
    setAddress({ ...address, [target.name]: target.value });

  const cards = [
    [
      {
        name: "pincode",
        required: true,
        fullWidth: true,
        label: "Pincode",
        type: "number",
      },
      {
        name: "line1",
        required: true,
        fullWidth: true,
        label: "House No., Building name",
      },
      {
        name: "line2",
        required: true,
        fullWidth: true,
        label: "Road Name, Area, Colony",
      },
      { name: "city", required: true, label: "City" },
      { name: "State", required: true, label: "State" },
      {
        name: "landmark",
        required: false,
        fullWidth: true,
        label: "Landmark (Optional)",
      },
    ],
    [
      {
        label: "Name",
        name: "name",
        required: true,
        fullWidth: true,
      },
      {
        name: "phone",
        required: true,
        fullWidth: true,
        label: "10-digit mobile number",
        type: "number",
      },
      {
        name: "altphone",
        required: false,
        fullWidth: true,
        label: "Alternate Phone Number (Optional)",
        type: "number",
      },
    ],
  ];

  return (
    <MobilePageLayout pageName={pageName}>
      {cards.map((card, key) => (
        <Card key={key} className={classes.root}>
          {card.map((field) => (
            <TextField
              key={field.name}
              name={field.name}
              required={field.required}
              fullWidth={field.fullWidth}
              className={classes.textInput}
              value={address[field.name]}
              label={field.label}
              onChange={onChange}
              type={field.type || "text"}
            />
          ))}
        </Card>
      ))}
      <Card className={classes.root}>
        <FormControl component="fieldset" className={classes.textInput}>
          <FormLabel component="legend">Address Type</FormLabel>
          <br />
          <RadioGroup name="label" value={address.label} onChange={onChange}>
            <FormControlLabel
              value="Home"
              control={<Radio color="primary" />}
              label="Home Address"
            />
            <FormControlLabel
              value="Work"
              control={<Radio color="primary" />}
              label="Work/Office Address"
            />
          </RadioGroup>
        </FormControl>
      </Card>
      <ActionButton label="Save" use="phone" />
    </MobilePageLayout>
  );
}
