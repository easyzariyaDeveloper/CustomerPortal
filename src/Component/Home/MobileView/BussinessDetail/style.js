import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { base_spacing } from "../../../../Assets/style-var";
import { EZElevation } from "../../../Common/MobileCard";

export const Header = styled.p`
    font-size: 22px;
    margin: ${base_spacing * 1.5}px 0;
    font-weight: 500;
    text-align: center;
`;

export const ContentWrapper = styled.div``;

export const Content = styled.div`
    border-radius: 5px;
    padding: ${base_spacing}px;
    background: white;
    margin: ${base_spacing}px ${base_spacing * 1.5}px;
    ${EZElevation}
`;

export const CenterImage = styled.img`
    width: 76px;
    height: 76px;
    margin: ${base_spacing}px auto;
`;

export const CenterHeader = styled.h1`
text-align: center;
color: #1DA0BC;
`;
export const SubHeader = styled.h3`
padding: 10px;
text-align: center;
`;

export const Label = styled.label`
    display: inline-block;
    margin: 0 ${base_spacing}px;
`;
export const SwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;