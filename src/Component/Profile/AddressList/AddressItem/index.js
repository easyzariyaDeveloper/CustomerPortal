import React from "react";
import { Item, AddressInfo, AddressDetail, AddressLines } from "./styles";
import {
  ButtonList,
  DeleteButton,
  EditButton,
} from "../../MyCar/CarItem/styles";
import InputGrp from "../../../Common/InputGrp";

export default function AddressItem({
  address,
  onChange,
  onEdit,
  onDelete,
  disabled = true,
}) {
  const id = address.id;
  return (
    <Item>
      <AddressInfo>
        <InputGrp
          name="label"
          value={address.label}
          disabled={disabled}
          isLabel={true}
          onChange={(e) => onChange(id, e)}
          placeholder="Add Label..."
        />
        <AddressLines>
          {" "}
          <InputGrp
            name="line1"
            value={address.line1}
            disabled={disabled}
            attached={true}
            onChange={(e) => onChange(id, e)}
            placeholder="Address Line 1..."
          />
          <InputGrp
            name="line2"
            value={address.line2}
            disabled={disabled}
            attached={true}
            onChange={(e) => onChange(id, e)}
            placeholder="Address Line2 ..."
          />
        </AddressLines>
        <AddressDetail>
          <InputGrp
            name="city"
            value={address.city}
            disabled={disabled}
            onChange={(e) => onChange(id, e)}
            placeholder="City"
          />
          <InputGrp
            name="state"
            value={address.state}
            disabled={disabled}
            onChange={(e) => onChange(id, e)}
            placeholder="State"
          />
          <InputGrp
            name="pincode"
            value={address.pincode}
            disabled={disabled}
            onChange={(e) => onChange(id, e)}
            placeholder="pincode"
          />
        </AddressDetail>
      </AddressInfo>
      <ButtonList>
        <EditButton onClick={() => onEdit(address.id)}>Edit </EditButton>
        <DeleteButton onClick={() => onDelete(address.id)}>Del</DeleteButton>
      </ButtonList>
    </Item>
  );
}
