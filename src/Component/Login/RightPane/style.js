import styled, {css} from "styled-components";
import { white_color, base_spacing } from "../../../Assets/style-var";

const ButtonStyle = css`
    width : 300px;
    text-transform: uppercase;
    text-align: center;
    display: block;
    height: 40px;
    border:0;
    border-radius: 2px;
    margin-bottom: ${base_spacing *2}px;
    margin-left: 30px;
    cursor: pointer;
   
`;

export const PaneWrapper = styled.section`
    background-color: ${white_color};
    padding: ${base_spacing * 4}px;
`;

export const FBLoginButton = styled.button`
    ${ButtonStyle}
    background-color: #3B5998;
    color: white;
`;  

export const GoogleLoginButton = styled.button`
    ${ButtonStyle}
    background-color: ${white_color};
    color: black;
    -webkit-box-shadow: 1px 4px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 4px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 4px 5px 0px rgba(0,0,0,0.75);
`;  

 