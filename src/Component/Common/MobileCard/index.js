import styled, { css } from "styled-components";
import { base_spacing, white_color, CommonBoxShadow } from "../../../Assets/style-var";


export const EZElevation = css`
    ${CommonBoxShadow}
`;

export const EZCard = styled.div`
    ${EZElevation}
    margin: ${base_spacing *2}px;
    transition : box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background: ${white_color};
    padding: ${base_spacing}px;
    overflow: hidden;
    border-radius: ${base_spacing/2}px;
`;

