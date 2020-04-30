import styled, {css} from "styled-components";
import { white_color, base_spacing } from "../../../Assets/style-var";

export const LeftPaneWrapper = styled.section`
    width:400px;
    background-color: white;
    text-align: center;
    padding: ${base_spacing * 2}px;
`;

export const Pic = styled.img`
    margin: 0 auto;
`;

export const AppDnld = styled.p`
    display: block;
    letter-spacing: 2px;
    color: #4B4B4B;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 10px;
`;

export const AppLink = styled.img`
    margin: 0 ${base_spacing * 1.5}px;
    vertical-align: middle;
`;