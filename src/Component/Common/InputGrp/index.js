import React from "react";
import { TextInput, InputGrp, Label } from "./styles";

export default function index({
  label,
  name,
  onChange,
  value,
  placeholder,
  disabled,
  isLabel = false,
  attached = false,
}) {
  return (
    <InputGrp>
      {label ? <Label>{label}</Label> : ""}
      <TextInput
        disabled={disabled}
        attached={attached}
        value={value}
        isLabel={isLabel}
        onChange={(e) => onChange(e)}
        name={name}
        placeholder={placeholder}
      />
    </InputGrp>
  );
}
