import React from "react";
import {
  Button,
  ButtonWrapper,
  RotatedArea,
  LinearArea,
  Arrow,
} from "./styles";
export default function ActionButton(props) {
  return (
    <ButtonWrapper
      onClick={props.onClick}
      disabled={props.disabled}
      size={props.size}
      use={props.use}
    >
      <Button disabled={props.disabled} size={props.size}>
        {props.label}
      </Button>
      {props.use === "phone" ? (
        ""
      ) : (
        <>
          <RotatedArea disabled={props.disabled} size={props.size} />
          <LinearArea disabled={props.disabled} size={props.size}>
            <Arrow>&#x2192;</Arrow>
          </LinearArea>
        </>
      )}
    </ButtonWrapper>
  );
}
