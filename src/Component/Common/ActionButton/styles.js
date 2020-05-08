import styled from "styled-components";
import { button_bg_color, disabled_button_bg_color, base_spacing } from "../../../Assets/style-var";

const Basepadding = base_spacing * 0.8;

export const Button = styled.button`
    font-size: 12px;
    color: ${({ disabled = false }) => (!disabled ? "white" : "#ddd")};
    background: ${({ disabled = false }) => (!disabled ? button_bg_color : disabled_button_bg_color)};
    padding 15px 30px 15px 20px;
    border: 0;
    text-decoration:none;
    text-transform:uppercase;
    cursor: ${({ disabled = false }) => disabled ? "not-allowed" : "pointer"};
    font-weight: 600;
    float: left;
    outline: transparent;
    min-width: 100px;
`;
export const ButtonWrapper = styled.div`
    padding: ${Basepadding}px;
    position: relative;
    cursor: ${({ disabled = false }) => disabled ? "not-allowed" : "pointer"};
    text-align: initial;
    width: fit-content;
    height: 65px;
`;

export const RotatedArea = styled.div`
    background: ${({ disabled = false }) => (!disabled ? "#2F7EE8" : "#E0E0E0")};
    width: 30px;
    height: 45px;
    display: inline-block;
    transform: skewX(-30deg);
    position: relative;
    left: -13px;
`;

export const LinearArea = styled.div`
    position: absolute;
    background: ${({ disabled = false }) => (!disabled ? "#2F7EE8" : "#E0E0E0")};
    right: ${Basepadding}px;
    top: ${Basepadding}px;
    bottom: ${({ disabled = false }) => (!disabled ? "12px" : "11px")};
    width: 26px;

    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 25px;
    color: white;
`;

export const Arrow = styled.span`
    position: absolute;
    right: 5px;
`;