import React from "react";
import { Button } from "./styles";
export default function ActionButton(props) {
  return (
    // <customButton onClick={props.onClick} disabled={props.disabled}>
    <Button disabled={props.disabled} onClick={props.onClick}>
      {props.label}
    </Button>
  );
}
