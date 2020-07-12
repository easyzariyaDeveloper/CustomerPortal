import styled from "styled-components";
import ScrollTab from "./MTab";
import { Mfont_color, base_spacing } from "../../../Assets/style-var";
import { EZCard } from "../../Common/MobileCard";

export const ServiceMPageWrapper = styled.div``;

export const DropDrownWrapper = styled.div`
    padding:10px;
`;

export const MServiceCard = styled(EZCard)`
    margin:0
`;


export const MTab = styled(ScrollTab)`
    background: rgba(30, 62, 108, 0.04);
`;