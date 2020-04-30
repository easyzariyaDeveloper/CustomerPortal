import styled from "styled-components";
import { login_bg_color, base_spacing, borderVariable, white_color } from "../../Assets/style-var";


export const OtpPanewrapper = styled.div`
background-color: ${white_color};
width:380px;
`;


export const OtpWrapper =styled.div`
position: absolute;
`;

export const EnterOtp = styled.h1`
position:relative;
left: 50%;
top: 100px;
font-size: 40px;
display: flex;
letter-spacing: 0.15px;
color: #4B4B4B;
`;

export const Otp = styled.input`
padding-left: 15px;
letter-spacing: 42px;
border: 0;
background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
background-position: bottom;
background-size: 50px 1px;
background-repeat: repeat-x;
background-position-x: 35px;
width: 150px;

`;