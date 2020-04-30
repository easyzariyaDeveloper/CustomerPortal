import styled from "styled-components";
import { base_spacing, login_bg_color, white_color } from "../../../Assets/style-var";
import { alignHorizontally } from "../../../Assets/common-styled";

//${alignHorizontally}
export const TabWrapper = styled.div`
    text-align: center;
    padding: ${base_spacing * 3}px 0;
`;

export const Tabs = styled.div`
    margin-bottom: ${base_spacing * 2}px;
    background-color: #E7EAFF;
`;

export const TabItem = styled.p`
    display: inline-block;
    padding: ${base_spacing}px ${base_spacing * 2}px;
    text-align: center;
    align-item: center;
    cursor: pointer;
    border: 1px solid black;
    min-width:180px;
    font-weight: ${(props) => props.active ? "bold" : "initial"};
    text-decoration: ${(props) => props.active ? "underline": "none"};
    background-color: ${(props) => props.active ? white_color: login_bg_color};
    border: 1px solid #D5D5D5;
    
    
`

