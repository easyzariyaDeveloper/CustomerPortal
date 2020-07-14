import styled from "styled-components";
import ScrollTab from "./MTab";
import { base_spacing, EZFontMediumSize, ez_button_color, white_color } from "../../../Assets/style-var";
import { EZCard } from "../../Common/MobileCard";

export const ServiceMPageWrapper = styled.div``;

export const DropDrownWrapper = styled.div`
    padding:10px;
`;


export const MTab = styled(ScrollTab)`
    background: rgba(30, 62, 108, 0.04);
`;

export const Label = styled.label`
    text-align: left;
    margin: 0 ${base_spacing}px;
    font-size: ${base_spacing *1.5}px;
    float: left;
`;

export const ResetButton = styled.button`
    margin-top: ${base_spacing}px;
    height: ${base_spacing * 3.3}px; 
    border: none;
    border-radius: 5px;
    text-align: center;
    background: ${ez_button_color};
    color: ${white_color};
    font-size: ${base_spacing *1.8}px;
`;