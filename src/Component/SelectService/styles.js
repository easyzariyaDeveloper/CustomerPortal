import styled, {css} from "styled-components";
import { base_spacing, border_color, backGroundLinearGradient, borderVariable, login_bg_color } from "../../Assets/style-var";
import { AlignItems } from "../../Assets/common-styled";

const cardWidth = 320;

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
    ${AlignItems}
    ${backGroundLinearGradient}
    border: ${borderVariable};
    height: 30px;
    padding:10px;
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
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
    font-size: 55px;
    text-align: center;
    margin-bottom: 0;
    font-weight: bold;
    padding: ${base_spacing * 3}px;
    background-color: ${login_bg_color};
    
`;