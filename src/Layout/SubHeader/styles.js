import styled from "styled-components";
import {
  white_color,
  base_spacing,
  ez_button_color,
} from "../../Assets/style-var";
import { StyledLink, alignCenter } from "../../Assets/common-styled";

const link_font_size = "15px";
const sub_header_height = 60;
export const SubHeaderWrapper = styled.div`
  ${alignCenter};
  height: ${sub_header_height}px;
  justify-content: space-around;
  width: 100%;
  background: ${ez_button_color};
`;
export const Link = styled(StyledLink)`
  padding: 0 ${base_spacing * 1.5}px;
  color: ${white_color};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  font-size: ${link_font_size};
  vertical-align: middle;
`;
//text-decoration: ${({ active }) => (active ? "underline" : "none")};
export const SubHeaderLinks = styled.div`
  display: flex;
`;
export const SubHeaderRightSection = styled.div`
  ${alignCenter};
`;
export const Cart = styled.img``;
export const Search = styled.img``;
