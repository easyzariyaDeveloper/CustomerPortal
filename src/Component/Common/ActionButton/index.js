import React from "react";
import {
  Button,
  ButtonWrapper,
  RotatedArea,
  LinearArea,
  Arrow,
} from "./styles";
import { PHONE } from "../../../Constants";
export default function ActionButton(props) {
  return (
    <ButtonWrapper
      onClick={props.onClick}
      disabled={props.disabled}
      use={props.use}
    >
      <Button disabled={props.disabled}>{props.label}</Button>
      {props.use === PHONE ? (
        ""
      ) : (
        <>
          <RotatedArea disabled={props.disabled} />
          <LinearArea disabled={props.disabled}>
            <Arrow>&#x2192;</Arrow>
          </LinearArea>
        </>
      )}
    </ButtonWrapper>
  );
}
