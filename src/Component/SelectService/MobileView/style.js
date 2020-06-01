import styled from "styled-components";
import ScrollTab from "../../Common/Tab";
import { Mfont_color, base_spacing } from "../../../Assets/style-var";

export const ServiceMPageWrapper = styled.div``;

export const MServiceHeader = styled.h1`
    font-family: Source Sans Pro;
    color: ${Mfont_color};
    font-weight: bold;
    font-size: ${base_spacing*1.4}px;
    text-align: center;
    padding: ${base_spacing}px 0;
    text-transform: uppercase;
`;


export const MTab = styled(ScrollTab)`
    background: rgba(30, 62, 108, 0.04);
`;