import styled from "styled-components";
import { base_spacing } from "../../../../Assets/style-var";


export const TabDiv = styled.div`
    display:flex;
    justify-content: space-around;
    background: rgba(30, 62, 108, 0.04);
    
    .MuiTab-wrapper {
        font-weight: bold;
    }
`;

//https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
 
export const ServiceCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    margin: auto;
`;

export const ServiceCard = styled.div`
    width: ${base_spacing*13}px;
    height: ${base_spacing*12}px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: ${base_spacing*1.5}px;
    padding: ${base_spacing}px;
    align-self: center;
    justify-self: center;
    position: relative;
`;

export const ServiceImage = styled.img`
    display: block;
    margin: auto;
    padding-bottom: ${base_spacing}px;
`;

export const Label = styled.p`
    color:#1E3E6C;
    font-weight: bold;
    font-size: ${base_spacing*1.3}px;
    display: flex;
    justify-content: center;
`;

export const ServiceLink = styled.a`
    cursor:pointer;
    width: 100%;
    height: 100%;
    text-decoration: none;
    pointer-events: ${({disabled}) => disabled ? "none" : "auto"};
`;

export const TransparentElement = styled.div`
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
`;