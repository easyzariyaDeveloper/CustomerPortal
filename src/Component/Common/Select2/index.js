import React from "react";
import { StyledSelect } from "./styles";
export default function Select2({ options, name, defaultValue, ...props }) {
  options = options.map((optionObj) => ({
    label: optionObj.name,
    ...optionObj,
  }));
  const selected = options.find((option) => option.id === defaultValue);
  return (
    <StyledSelect
      name={name}
      options={options}
      value={selected}
      disabled={props.disabled}
      onChange={(event) => {
        const { value } = event;
        event.target = { name, value };
        const selectedObj = options.find((obj) => obj["value"] === value);
        if (selectedObj) {
          props.onChangeHandler && props.onChangeHandler(event);
        }
      }}
    />
  );
}
