import styled from "styled-components";
import { Link } from "react-router-dom";
import { header_bg_color, white_color } from "../../Assets/style-var";

const link_font_size = "15px";
export const SubHeaderWrapper = styled.div`
  background: ${header_bg_color};
  height: fit-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 20%;
`;
export const StyledLink = styled(Link)`
  padding: 0 15px;
  color: ${white_color};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
  font-size: ${link_font_size};
  vertical-align: middle;
  text-decoration: none;
`;
//text-decoration: ${({ active }) => (active ? "underline" : "none")};
export const SubHeaderLinks = styled.div`
  display: flex;
`;
export const SubHeaderRightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Cart = styled.img``;
export const Search = styled.img``;
