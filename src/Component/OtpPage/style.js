import styled from "styled-components";

export const OtpPageWrapper = styled.div`
    background:linear-gradient(89.02deg, #1DA0BC 0.88%, #1DE3B6 89%);
    padding:20px;
    height: calc(100vh - 64px);

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
export const BackButtonDiv = styled.div`
    color: white;
    disply:flex;
    align-items: center;
`;

export const AnchorButton = styled.a`
    vertical-align: middle;
    color: white;
    text-decoration: none;
`;

export const OtpImg = styled.img`
    display: block;
`;

export const MessagePara = styled.p`
    color: white;
    padding: 15px;
    font-size: 15px;
    line-height: 25px;
    
`;


export const VerifyButton = styled.div`
   position: absolute;
   width: 300px;

`;

