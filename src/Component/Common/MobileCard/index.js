import styled, { css } from "styled-components";
import { base_spacing, white_color } from "../../../Assets/style-var";

//box-shadow : 0px 4px 4px rgba(0, 0, 0, 0.25);
export const EZElevation = css`
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
`;

export const EZCard = styled.div`
    ${EZElevation}
    width: 100%;
    margin: ${base_spacing * 2}px auto;
    transition : box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background: ${white_color};
    padding: ${base_spacing * 1.6}px;
    overflow: hidden;
`;

