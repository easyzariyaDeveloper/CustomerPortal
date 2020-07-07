import styled from "styled-components";
import { desktop_gradient, base_spacing } from "../../Assets/style-var";

export const OtpPageWrapper = styled.div`
    background: ${desktop_gradient};
    padding:20px;
    height: calc(100vh - 64px);
    text-align: center;

    .otp-field{
        width: 50px;
        background-color: #56CCF2;
        border-bottom: 2px solid white;
        color: white;
        outline: none;
        margin-right: 20px;
        padding-left: 20px;
        font-size:20px;
    }
`;

export const AnchorButton = styled.a`
    vertical-align: middle;
    color: white;
    text-decoration: none;
`;

export const OtpImg = styled.img`
    display: block;
    padding-left: ${base_spacing*3}px;
`;

export const MessagePara = styled.p`
    color: white;
    padding: 15px;
    font-size: 15px;
    line-height: 25px;
    
`;


export const VerifyButton = styled.div``;

