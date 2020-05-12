import styled from "styled-components";
import { base_spacing, white_color, borderVariable } from "../../../Assets/style-var";
import { TextField } from "@material-ui/core";
import { MCard } from "../../../Assets/common-styled";


export const SocialLogIn = styled.div`
    margin: ${base_spacing *2}px 0px;
    border-bottom: ${borderVariable};
    padding-bottom: 20px;
`;

export const OrDiv = styled.div`
    position: relative
`;

export const OrPara = styled.p`
    background-color: ${white_color};
    font-size: 16px;
    padding: ${base_spacing/2}px;
    position: absolute;
    border-radius: 50%;
    left: 45%;
    top:-35px;
    margin-bottom:10px;
`;

export const TextInput = styled(TextField)`
    width: 100%; 
`;

export const LoginCard = styled(MCard)`
    margin-top:40px;
`;
export const PasswordLink = styled.div`
    text-align: center;    
    margin: 10px ;
    margin-bottom: 40px;
`;

export const LoginButton = styled.div`
    text-align: -webkit-center;
    margin : 20px 0px;
`;

export const SignUpText = styled.div`
    text-align: center;
    margin: 15px;
`;