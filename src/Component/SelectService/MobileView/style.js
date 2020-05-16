import styled from "styled-components";
import ScrollTab from "../../Common/Tab";
import { MCard } from "../../../Assets/common-styled";
import { secondary_font_color, button_bg_color } from "../../../Assets/style-var";


export const ServiceMPageWrapper = styled.div``;

export const MTab = styled(ScrollTab)``;

export const ServiceCard = styled(MCard)``;

export const CardImage = styled.img`
    padding: 0px;
    width:100%;
`;

export const ServiceHeader = styled.h1`
    color: ${secondary_font_color};
    font-weight: 700;
    font-size: 18px;
`;
export const PriceHeader = styled.h2`
    color: ${button_bg_color};
    font-weight: 700;
    font-size: 18px;
`;

export const ServicePriceDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top:10px;
`;

export const ServiceDescription = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
`;


