import styled from "styled-components";
import {
  base_spacing,
  border_color,
  header_bg_color,
} from "../../../Assets/style-var";
import { StyledLink } from "../../../Assets/common-styled";

const menu_width = 240;
export const mobile_header_height = 64;

export const HeaderWrapper = styled.div`
  height: ${mobile_header_height}px;
  padding: ${base_spacing}px;
  border-bottom: 1px solid ${border_color};
  background: ${header_bg_color};
  position: relative;
  line-height: ${mobile_header_height}px;
  display: flex;
  color: white;
  align-items: center;
`;

export const Hamburger = styled.div`
  color: white;
  font-size: 18px;
`;

export const MenuWrapper = styled.section`
  position: absolute;
  width: ${menu_width}px;
  left: ${(props) => (props.active ? "0px" : `-${menu_width}px`)};
  top: 0;
  bottom: 0;
  background: white;
  transition: left 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  z-index: 100;
  padding: ${base_spacing}px;
`;

export const Close = styled.label`
  position: absolute;
  right: 0;
  top: 0;
  width: 45px;
  height: 45px;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  padding: ${base_spacing}px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 1;
`;

export const PageName = styled.p`
  font-size: 20px;
  color: white;
  margin-left: ${base_spacing * 3}px;
`;

export const Link = styled(StyledLink)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  line-height: 24px;
`;
