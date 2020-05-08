import React from "react";
import { StyledSelect,StyledSelectWrapper } from "./styles";
export default function Select2({ options, name, defaultValue, ...props }) {
  options = options.map((optionObj) => ({
    label: optionObj.name,
    ...optionObj,
  }));
  const selected = options.find((option) => option.id === defaultValue);
  const styles = customStyle();
  return (
    <StyledSelectWrapper>
    <StyledSelect
      name={name}
      options={options}
      value={selected}
      disabled={props.disabled}
      className = "EZ-select"
      styles = {styles}
      placeholder = {props.placeholder || "Select" }
      onChange={(event) => {
        const { value } = event;
        event.target = { name, value };
        const selectedObj = options.find((obj) => obj["value"] === value);
        if (selectedObj) {
          props.onChangeHandler && props.onChangeHandler(event);
        }
      }}
    />
    </StyledSelectWrapper>
  );
  
  /**
   * Reference https://react-select.com/styles
   */
  function customStyle(){
    let style = {};
    style = {
      indicatorsContainer: () => ({
        display: 'none'
      }),
      control: () => ({
        backgroundColor: "white",
        borderRadius: 2,
        cursor: "pointer",
        minHeight: 40,
        display: "flex",
        alignItem: "center"
      }),
      placeholder: (provided) => {
        return {
          ...provided,
          left: '50%',
          transform: "translate3d(-50%,-50%,0)"
        }
    } 
    }

    if(props.customStyle){
      style = {
        ...style,
        ...props.customStyle()
      }
    }
    return style;
  }
}
