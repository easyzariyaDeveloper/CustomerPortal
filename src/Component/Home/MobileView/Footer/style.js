import styled from "styled-components";
import { desktop_gradient, base_spacing } from "../../../../Assets/style-var";

export const HomeFooterWrapper = styled.div`
    background: ${desktop_gradient};
    margin-top: ${base_spacing *3}px;
`;

export const LinkWrapperA = styled.div`
    padding-top: ${base_spacing}px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
`;

export const LinkWrapperB = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const FooterLink = styled.a`
    text-decoration: none;
    color: white;
    padding:${base_spacing}px;
`;

export const BorderDiv= styled.div`
    border-top: 1.5px solid white; 
    width: ${base_spacing *20 }px;
    margin: ${base_spacing}px auto;   
`;

export const ContactInfoDiv= styled.div`
    padding:10px;
    padding-left: 25px;
`;

export const ContactIcon = styled.img`
width: 20px;
height: 20px;
vertical-align: text-top;
`;

export const FooterAddress= styled.h3`
    color:white;
    display: inline-block;
    padding-left: 15px;
    justify-content: center;
`;

export const SocialDiv = styled.div`
    display: flex;
    justify-content: center;
    
`;

export const SocialIcon= styled.img`
border: 1px solid #FFFFFF;
border-radius:50%;
margin:10px;
padding:7px;
height:40px;
width:40px;

`;


export const RightsDiv = styled.div`
    background: linear-gradient(89.28deg, #1DA0BC 0.88%, #1DE3B6 89%);
    color: white;
    padding: 10px;
    text-align: center;
`;