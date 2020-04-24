import styled, {css} from "styled-components";
import { white_color, base_spacing, border_color } from "../../../../Assets/style-var";


export const EZLoginWrapper = styled.div`
    margin-top: ${base_spacing * 4.5}px;
    width : 374px;
    background-color: ${white_color};
    position: relative;
    border-top: 2px solid #D5D5D5;
`;

export const InputForm = styled.input`
    margin-top: 40px;
    height: 20px;
    padding: ${base_spacing / 2}px;
    background-color: ${white_color};
    width:100%;
    border: 0;
    border-bottom: 1px solid ${border_color};
    outline: transparent;
    font-size: 18px;
`;  

export const Divison = styled.p`
    background-color: ${white_color};
    font-size: 16px;
    padding: ${base_spacing/2}px;
    position: absolute;
    border-radius: 50%;
    left: 45%;
    top: -13px;
`;

export const SignUpText = styled.p`
    margin-top: 30px;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #959595
`;

export const LoginButton = styled.button`
    width : 300px;
    color: white;
    text-align: center;
    height: 40px;
    border:0;
    border-radius: 2px;
    margin-bottom: ${base_spacing *2}px;
    margin-left: 30px;
    cursor: pointer;
    background: linear-gradient(79.5deg, #62B58F 0.29%, #29C3BE 52.74%, #03B3AD 100%);
    opacity: 0.5;
    margin-top: inherit;
`;
