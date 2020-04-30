import styled, {css} from "styled-components";
import { base_spacing, border_color } from "../../Assets/style-var";

const cardWidth = 320;

const customStyle = css`
    align-items: center;
    text-align: center;
`;

export const ServicesWrapper = styled.div``;

export const CardWrapper = styled.div` 
    width: ${(cardWidth + 40) * 3}px;
    margin: 0 auto;
    overflow: auto;
`;

export const Card = styled.div`
    width: ${cardWidth}px;
    float: left;
    margin: ${base_spacing * 2}px;
    height:auto;
    margin-top: 0;
`;

export const ServiceName = styled.h1`
    ${customStyle}
    background: linear-gradient(79.68deg, #62B58F 0.29%, #29C3BE 52.74%, #03B3AD 100%);
    border: 1px solid ${border_color};
    height: 30px;
    padding:10px;
    align-items: center;
    text-align: center;
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
`;

export const ServiceInfo = styled.div``;

export const ServiceCost = styled.p`
    ${customStyle}
    padding: 10px 10px;
    border-left: 1px solid #D5D5D5;
    border-right: 1px solid #D5D5D5;
    font-weight: 300;
    font-size: 24px;
    line-height: 26px;
`;

export const ServiceDuration = styled.p`
    ${customStyle}
    color: #4B4B4B;
    border: 1px solid #D5D5D5;
    border-top:0;
    padding: ${base_spacing}px;
`;

export const ListItem = styled.p`
    ${customStyle}  
    border: 1px solid #D5D5D5;
    border-top:0;
    padding: 10px 0;
    color: #4B4B4B;
`;

export const ButtonWrapper = ListItem;

export const ServiceCostInTable = styled.section`
    padding: 10px 10px;
    border-left: 1px solid #D5D5D5;
    border-right: 1px solid #D5D5D5;
    font-weight: 300;
    font-size: 24px;
    line-height: 26px;
    border: 0;
`;

export const ServiceDurationInTable = styled.section`
    ${ServiceDuration}; 
    border: 0;
`;

export const SelectServicePageHeader = styled.h1`
    font-size: 55px;
    text-align: center;
    margin-bottom: 0;
    font-weight: bold;
    padding: ${base_spacing * 3}px;
    background-color: #E7EAFF;
    
`;