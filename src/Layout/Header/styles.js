import styled from "styled-components";
import {desktop_gradient} from "../../Assets/style-var"

const header_bg_color = "#FFFFFF";
const base_spacing = 10;

export const HeaderWrapper = styled.div`
  height: 75px;
  background: ${desktop_gradient};
  padding-top: 10px;
`;

export const Logo = styled.img``;

export const ServiceInformationWrapper = styled.section`
  float: right;
  font-weight: bold;
  font-size: 12px;
  color: grey;
  margin-right: ${base_spacing * 2}px;
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-around;
`;

export const ServiceData = styled.div`
  display: flex;
  margin-left: ${base_spacing * 2}px;
  justify-content: space-between;
  width
`;

export const ServiceInformationText = styled.p`
  margin-bottom: ${base_spacing}px;
  letter-spacing: 0.15px;
  line-height: 22px;
  margin-left: ${base_spacing}px;
  text-transform: uppercase;
`;
