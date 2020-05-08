import React from "react";
import { Button, ButtonWrapper, RotatedArea, LinearArea, Arrow } from "./styles";
export default function ActionButton(props) {
  return (
    <ButtonWrapper onClick={props.onClick} disabled={props.disabled}>
      <Button disabled={props.disabled}>
        {props.label}
      </Button>
      <RotatedArea disabled = {props.disabled} />
      <LinearArea disabled = {props.disabled}>
        <Arrow>&#x2192;</Arrow>
      </LinearArea>
    </ButtonWrapper>
  );
}
