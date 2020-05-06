import styled from "styled-components";
import { button_bg_color, disabled_button_bg_color } from "../../../Assets/style-var";

export const Button = styled.button`
    font-size: 12px;
    color: ${({ disabled = false }) => (!disabled ? "white" : "#ddd")};
    background: ${({ disabled = false }) => (!disabled ? button_bg_color : disabled_button_bg_color)};
    margin: 1em;
    padding 15px 30px 15px 20px;
    border: 0;
    text-decoration:none;
    text-transform:uppercase;
    cursor: ${({ disabled = false }) => disabled ? "not-allowed" : "pointer"};
    font-weight: 600;
`;
