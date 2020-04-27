import {css} from "styled-components";
import { base_spacing } from "./style-var";

export const alignHorizontally = css`
    display: flex;
    justify-content: center;
`;

export const alignCenter = css`
    ${alignHorizontally}
    align-items: center;
`;

export const Spacing1X = css`
    padding: ${base_spacing}px;
`
export const Spacing1_5X = css`
    padding: ${base_spacing * 1.5}px;
`