import styled from "styled-components";
import { ez_button_color } from "../../../../Assets/style-var";
import { MobileActionButton } from "../../../../Assets/common-styled";

export const TermsPara = styled.p`
font-style: italic;
padding: 13px;
margin: 15px 0;
font-weight:300
`;

export const SignupLogInButton = styled.button`
    border: none;
    color: white;
    background: ${ez_button_color};
    border-radius: 5px;
    height: 35px;
    width: 100px;
    margin-bottom: 20px;
`;

export const RedirectButton = styled.button`
    border: none;
    color: ${ez_button_color};
    background: transparent;
    display: block;
    margin: 25px auto;
    cursor: pointer;
    outline: none;
    font-size: 15px;
`;

export const ResetOverLay = styled.div`
    position: fixed;
    top: 0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0,0,0,0.5);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ResetSubmitButton = styled(MobileActionButton)`
    display: block;
    margin: 10px auto 10px auto;
    width: 50%;
`;

export const ResetWrapper = styled.div`
    padding: 10px;
    margin: 0 auto;
`;

export const ResetPasswordLabel = styled.p`
    padding: 10px 0 10px 25px;
`;