import React from "react";
import { SelectWrapper, SelectPara, Select, Option } from "./styles";

/**
 * 
 * @param {*} Sample Usage 
 * 
 *    <SelectBox 
      defaultValue = "A"
      options = {
        [{name: "A", value: "A"},
        {name: "b", value: "B"},
        {name: "c", value: "C"}]
      }></SelectBox>
 */

export default function SelectBox({ options, name, defaultValue, ...props }) {
  const selected = defaultValue;
  const obj = options.find((ob) => ob.value === selected);
  return (
    <SelectWrapper disabled={props.disabled}>
      <SelectPara>{obj ? obj.name : ""}</SelectPara>
      <Select
        name={name}
        value={selected}
        disabled={props.disabled}
        onChange={(event) => {
          const { value, selectedIndex } = event.target;
          const selectedObj = options.find((obj) => obj["value"] === value);
          if (selectedObj) {
            props.onChangeHandler && props.onChangeHandler(event);
          }
        }}
      >
        {options.map((optionObj, index) => {
          return (
            <Option value={optionObj.value} key={optionObj.value}>
              {optionObj.name}
            </Option>
          );
        })}
      </Select>
    </SelectWrapper>
  );
}
