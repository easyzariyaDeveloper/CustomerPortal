import React, {useState} from "react";
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

export default function SelectBox(props){
    const [selected, setSelected] = useState(props.defaultValue);
    const [options, setOptions] =  useState(props.options)

    return <SelectWrapper>
        <SelectPara>{selected ? selected : ""}</SelectPara>
        <Select
            onChange = {(event) => {
                const {value, selectedIndex} = event.target;
                const selectedObj = options.filter((obj) => (obj["value"] || obj["name"]) === value);
                if(selectedObj.length > 0){
                    setSelected(selectedObj[0]["name"]);
                    props.onChangeHandler && props.onChangeHandler(selectedObj, selectedIndex)
                }
            }}
        >
            {options.map((optionObj, index) => {
                return <Option 
                    value = {optionObj["value"] || optionObj["name"]} 
                    disabled = {props.disabled}
                    selected = {selected === optionObj["name"]}
                    key = {optionObj["value"] || optionObj["name"]}
                >
                    { optionObj["name"] }
                </Option>
            })}
        </Select>
    </SelectWrapper>
}