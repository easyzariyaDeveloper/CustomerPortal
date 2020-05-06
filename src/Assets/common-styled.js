import styled, {css} from "styled-components";
import { base_spacing, header_font_size, header_font_color, white_color, login_bg_color } from "./style-var";

export const alignHorizontally = css`
  display: flex;
  justify-content: center;
`;

export const alignCenter = css`
  ${alignHorizontally}
  align-items: center;
`;
export const flexColumn = css`
  ${alignCenter}
  flex-direction :column;
`;
export const Spacing1X = css`
  padding: ${base_spacing}px;
`;
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

export const PageWrapper = css`
  position: relative;
`;
export const PageHeader = css`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  font-weight: bold;
  font-size: ${header_font_size}px;
  color: ${header_font_color};
  text-align: center;
  text-transform: capitalize;
`;
export const Attached = css`
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const Labels = css`
  font-weight: 500;
  font-size: 24px;
`;
