import {css} from "styled-components";

export const alignHorizontally = css`
    display: flex;
    justify-content: center;
`;

export const alignCenter = css`
    ${alignHorizontally}
    align-items: center;
`;