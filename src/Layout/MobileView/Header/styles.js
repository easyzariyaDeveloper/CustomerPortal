import styled from "styled-components";
import {
  base_spacing,
  border_color,
  white_color,
  ez_primary_theme_color,
  desktop_gradient,
  ez_button_color,
} from "../../../Assets/style-var";
import { StyledLink } from "../../../Assets/common-styled";
import { EZElevation } from "../../../Component/Common/MobileCard";
const menu_width = 240;
export const mobile_header_height = 55;

export const HeaderWrapper = styled.div`
  height: ${mobile_header_height}px;
  padding: ${base_spacing}px;
  border-bottom: ${(props) => props.noborder ? "" : `1px solid ${border_color}`};
  background: ${desktop_gradient};
  position: relative;
  line-height: ${mobile_header_height}px;
  display: flex;
  color: white;
  align-items: center;
  ${EZElevation}
`;

export const Hamburger = styled.div`
  color: white;
  font-size: 21px;
  color: ${white_color};
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

export const BackButton = styled.div`
  font-size: 21px;
  color: ${white_color};
  position: absolute;
  left: ${base_spacing/2}px;
  top: ${base_spacing/2}px;
  bottom: 0;
  width: ${base_spacing*3}px;
  text-align: center;
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
  margin: 0 auto;
`;

export const Link = styled(StyledLink)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  line-height: 24px;
`;

export const CartWrapper = styled.a`
  position:relative;
  height: 100%;
  padding-right: 5px;
  color: white;
`;

export const ItemCount = styled.p`
  color: white;
  background: ${ez_button_color};
  width: 25px;
  position: absolute;
  right: 0px;
  top: -8px;
  text-align: center;
  height: 25px;
  border-radius: 50%;
  line-height: initial;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
