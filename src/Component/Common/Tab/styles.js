import styled from "styled-components";
import { base_spacing } from "../../../Assets/style-var";

export const TabDiv = styled.div`
    display:flex;
    justify-content: space-around;
    background: rgba(30, 62, 108, 0.04);
    
    .MuiTab-wrapper {
        font-weight: bold;
    }
`;

export const ServiceCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    margin: auto;
`;

export const ServiceCard = styled.div`
    width: ${base_spacing*12}px;
    height: ${base_spacing*12}px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: ${base_spacing*1.5}px;
    padding: ${base_spacing}px;
    align-self: center;
    justify-self: center;
`;

export const ServiceImage = styled.img`
    display: block;
    margin: auto;
    padding-bottom: ${base_spacing}px;
`;

export const LabelLink = styled.a`
    color:#1E3E6C;
    font-weight: bold;
    font-size: ${base_spacing*1.3}px;
    text-decoration: none;
    display: flex;
    justify-content: center;
`;