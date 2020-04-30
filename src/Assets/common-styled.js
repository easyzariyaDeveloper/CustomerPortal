import { css } from "styled-components";
import { base_spacing, header_font_size, header_font_color } from "./style-var";

export const alignHorizontally = css`
  display: flex;
  justify-content: center;
`;

export const alignCenter = css`
  ${alignHorizontally}
  align-items: center;
`;
export const flexColumn = css`
  ${alignCenter}
  flex-direction :column;
`;
export const Spacing1X = css`
  padding: ${base_spacing}px;
`;
export const Spacing1_5X = css`
  padding: ${base_spacing * 1.5}px;
`;
export const PageWrapper = css`
  position: relative;
`;
export const PageHeader = css`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  font-weight: bold;
  font-size: ${header_font_size}px;
  color: ${header_font_color};
  text-align: center;
  text-transform: capitalize;
`;
