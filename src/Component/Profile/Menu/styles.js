import styled from "styled-components";
import { base_spacing } from "../../../Assets/style-var";
import { StyledLink } from "../../../Assets/common-styled";

export const MenuHeader = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  color: #4b4b4b;
  border-bottom: 2px solid #959595;
  padding-bottom: ${base_spacing}px;
  margin-bottom: 18px;
`;

export const MenuBox = styled.div`
  border: 1px solid #959595;
  padding: ${base_spacing * 2}px 27px;
  height: fit-content;
  width: 215px;
  box-shadow: 0px 2px 4px rgba(38, 38, 38, 0.24);
`;

export const List_Item = styled.a`
  color: ${({ active }) => (active ? "#4B4B4B" : "#959595")};
`;
export const Link = styled(StyledLink)`
  color: ${({ active }) => (active === "true" ? "#4B4B4B" : "#959595")};
  border-bottom: 1px solid
    ${({ active }) => (active === "true" ? "#959595" : "#D5D5D5")};
  display: block;
`;
