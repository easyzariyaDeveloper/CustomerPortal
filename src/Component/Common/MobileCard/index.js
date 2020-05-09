import styled, { css } from "styled-components";
import { base_spacing, white_color } from "../../../Assets/style-var";

export const EZElevation = css`
    box-shadow : 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export const EZCard = styled.div`
    ${EZElevation}
    width: 100%;
    margin: ${base_spacing * 1.6}px auto;
    transition : box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background: ${white_color};
    padding: ${base_spacing * 1.6}px;
    overflow: hidden;
`;

