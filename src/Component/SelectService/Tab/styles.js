import styled from "styled-components";
import { base_spacing, header_bg_color, white_color, borderVariable } from "../../../Assets/style-var";
import { AlignItems } from "../../../Assets/common-styled";
const ActiveBackgroundColor = "#D5D5D5"; //"#B67EB3";
const NonActiveBGColor = "#FFF"; // "#F8F6F3";

//${alignHorizontally}
export const TabWrapper = styled.div`
    text-align: center;
    margin-bottom: ${base_spacing *3}px;

`;

export const Tabs = styled.div`
    margin-bottom: ${base_spacing * 2}px;
    background-color: ${white_color};
`;

export const TabItem = styled.p`
    ${AlignItems}
    display: inline-block;
    padding: ${base_spacing}px ${base_spacing * 2}px;
    cursor: pointer;
    border: 1px solid #959595;
    min-width:180px;
    font-weight: ${(props) => props.active ? "bolder" : "initial"};
    background-color: ${(props) => props.active ? NonActiveBGColor: ActiveBackgroundColor};
    border: ${borderVariable};
    color: black;
`