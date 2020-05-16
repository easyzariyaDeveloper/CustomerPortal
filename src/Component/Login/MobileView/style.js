import styled from "styled-components";
import { base_spacing, white_color, borderVariable } from "../../../Assets/style-var";
import { TextField } from "@material-ui/core";
import { MCard } from "../../../Assets/common-styled";


export const SocialLogIn = styled.div`
    margin: ${base_spacing *2}px 0px;
    border-bottom: ${borderVariable};
    padding-bottom: ${base_spacing*2}px;
`;

export const OrDiv = styled.div`
    position: relative;
`;

export const OrPara = styled.p`
    background-color: ${white_color};
    font-size: 14px;
    padding: ${base_spacing}px;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    top:-35px;
    margin-bottom:${base_spacing}px;
    transform: translate3d(-50%,0,0);

`;

export const TextInput = styled(TextField)`
    width: 100%; 
    margin: 5px 0px !important;
`;

export const LoginCard = styled(MCard)`
    margin-top:${base_spacing*4}px;
`;
export const PasswordLink = styled.div`
    text-align: center;  
    margin: ${base_spacing*3.5}px  0;  
`;

export const LoginButton = styled.div`
    text-align: -webkit-center;
    margin : ${base_spacing*2}px 0px;
`;

export const SignUpText = styled.div`
    text-align: center;
    margin: ${base_spacing*1.5}px;
`;