import React from "react";
import { StyledField } from "./styles";
export default function index({ active, options, placeholder }) {
  const opt = options.map((option) => (
    <option key={option.id}>{option.value}</option>
  ));
  return <StyledField disabled={!active}>{opt}</StyledField>;
}
