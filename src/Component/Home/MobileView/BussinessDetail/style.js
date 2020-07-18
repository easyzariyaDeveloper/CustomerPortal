import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { base_spacing, secondary_font_color, CommonBoxShadow, EZFontMediumSize } from "../../../../Assets/style-var";
import { EZElevation } from "../../../Common/MobileCard";

export const Header = styled.p`
    font-size: 20px;
    margin: 0 0 ${base_spacing * 2}px ${base_spacing * 2}px;
    font-weight: 600;
    text-align: center;
    color: ${secondary_font_color};
    padding-top: ${base_spacing * 2}px;
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

export const SubHeader = styled.p`
    padding: 10px;
    font-weight: 300;
    letter-spacing: 0.35px;
    font-size: 13px;
    line-height: 14px;
`;

export const Label = styled.label`
    display: inline-block;
    margin: 0 ${base_spacing}px;
    font-size: ${EZFontMediumSize}
`;
export const SwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${base_spacing * 1.5}px 0;
`;

export const Wrapper = styled.div`
    background: white;
    margin: ${base_spacing * 2}px 0;
    padding-bottom: ${base_spacing * 2}px;
    ${CommonBoxShadow};
`;