import styled, {css} from "styled-components";
import { base_spacing, white_color, login_bg_color } from "./style-var";

export const alignHorizontally = css`
    display: flex;
    justify-content: center;
`;

export const alignCenter = css`
    ${alignHorizontally}
    align-items: center;
`;

export const Spacing1X = css`
    padding: ${base_spacing}px;
`
export const Spacing1_5X = css`
    padding: ${base_spacing * 1.5}px;
`

export const FontSize_20 = css`
    font-size: 20px;
`;

export const AlignItems = css`
    align-items: center;
    text-align: center;
`;

export const Margin_10 = css`
    margin: 10px;
`;

export const Login_SignUp_Button = styled.button`
    width : 300px;
    color: ${white_color};
    text-align: center;
    height: ${base_spacing*4}px;
    border:0;
    border-radius: 2px;
    margin-bottom: ${base_spacing *2}px;
    margin-left: ${base_spacing *3}px;
    cursor: pointer;
    background: linear-gradient(79.5deg, #62B58F 0.29%, #29C3BE 52.74%, #03B3AD 100%);
    opacity: 0.5;
    margin-top: inherit;
`;

export const LoginWrapper = styled.div`
    background-color: ${login_bg_color};
    padding: ${base_spacing * 2}px;
    display: flex;
    justify-content: space-around;
`;