import styled from "styled-components";
import {
  button_bg_color,
  disabled_button_bg_color,
  base_spacing,
} from "../../../Assets/style-var";
import { EZElevation } from "../MobileCard";
import { alignCenter } from "../../../Assets/common-styled";

export const Button = styled.button`
    font-size: 12px;
    height: inherit;
    padding 5px 30px 5px 30px;
    border: 0;
    color: ${({ disabled = false }) => (!disabled ? "white" : "#ddd")};
    background: ${({ disabled = false }) =>
      !disabled ? button_bg_color : disabled_button_bg_color};
    text-transform:uppercase;
    cursor: ${({ disabled = false }) => (disabled ? "not-allowed" : "pointer")};
    font-weight: 600;
    outline: transparent;
    float:left;
    width: ${({ use }) => (use === "phone" ? "100%" : "fit-content")};
    min-width: 160px;
    flex:2;
`;
export const ButtonWrapper = styled.div`
  padding: 0;
  ${EZElevation};
  cursor: ${({ disabled = false }) => (disabled ? "not-allowed" : "pointer")};
  text-align: initial;
  width: ${({ use }) => (use === "phone" ? "100%" : "un-set")};
  height: 45px;
  display: flex;
  align-items: flex-start;
  position: relative;
`;

export const RotatedArea = styled.div`
  background: ${({ disabled = false }) => (!disabled ? "#2F7EE8" : "#E0E0E0")};
  width: 15%;
  height: inherit;
  transform: skewX(-30deg);
  position: absolute;
  right: 7%;
`;

export const LinearArea = styled.div`
  background: ${({ disabled = false }) => (!disabled ? "#2F7EE8" : "#E0E0E0")};
  height: inherit;
  flex: 0.5;
  ${alignCenter}
  padding-right:5px;
  font-size: 25px;
  color: white;
  z-index: 1;
`;

export const Arrow = styled.span``;
