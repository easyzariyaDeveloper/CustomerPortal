import styled, {css} from "styled-components";
import { base_spacing, border_color, backGroundLinearGradient, borderVariable, button_bg_color, secondary_font_color } from "../../Assets/style-var";
import { AlignItems } from "../../Assets/common-styled";

const cardWidth = 320;

export const ServicesWrapper = styled.div``;

export const CardWrapper = styled.div` 
    margin: 0 auto;
    width: 80%;
`;

export const Card = styled.div`
    padding: ${base_spacing * 2}px;
    margin-top: 0;
`;

export const ServiceName = styled.h1`
    ${AlignItems}
    border: ${borderVariable};
    padding:10px;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    background-color: ${button_bg_color};
    color: white;
    text-transform: capitalize;
`;

export const ServiceInfo = styled.div``;

export const ServiceCost = styled.p`
    ${AlignItems}
    padding: 10px 10px;
    border-left: ${borderVariable};
    border-right: ${borderVariable};
    font-weight: 300;
    font-size: 24px;
    line-height: 26px;
`;

export const ServiceDuration = styled.p`
    ${AlignItems}
    color: #4B4B4B;
    border: ${borderVariable};
    border-top:0;
    padding: ${base_spacing}px;
`;

export const ListItem = styled.p`
    ${AlignItems}  
    border: ${borderVariable};
    border-top:0;
    padding: 10px 0;
    color: #4B4B4B;
`;

export const ButtonWrapper = ListItem;

export const ServiceCostInTable = styled.section`
    padding: 10px 10px;
    border-left: ${borderVariable};
    border-right: ${borderVariable};
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
    font-size: 25px;
    text-align: center;
    margin-bottom: 0;
    font-weight: bold;
    padding: ${base_spacing * 3}px;  
    color: ${secondary_font_color};
`;