import React from "react";
import FormField from "../../common/FormField/index";
import { StyledForm } from "./styles";
export default function index({ fields }) {
  const forms = fields.map((field, id) => (
    <FormField key={id} active={field.active} options={field.options} />
  ));
  return <StyledForm>{forms}</StyledForm>;
}
