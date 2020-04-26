import styled from "styled-components";
import { base_spacing } from "../../../Assets/style-var";
import { alignHorizontally } from "../../../Assets/common-styled";


export const TabWrapper = styled.div`
     ${alignHorizontally}
    padding: ${base_spacing * 3}px 0;
`;

export const Tabs = styled.div``;

export const TabItem = styled.p`
    display: inline-block;
    padding: ${base_spacing}px ${base_spacing * 2}px;
    text-align: center;
    cursor: pointer;
    font-weight: ${(props) => props.active ? "bold" : "initial"};
    text-decoration: ${(props) => props.active ? "underline": "none"}
`

