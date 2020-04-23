import styled from "styled-components";

const header_bg_color = "#FFFFFF";
const base_spacing = 10;

export const HeaderWrapper = styled.div`
  height: 75px;
  background: ${header_bg_color};
  padding-top: 10px;
`;

export const Logo = styled.img``;

export const ServiceInformationWrapper = styled.section`
  float: right;
  font-weight: bold;
  font-size: 12px;
  color: grey;
  margin-right: 15%;
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-around;
`;

export const ServiceData = styled.div`
  display: inline-block;
  margin-left: ${base_spacing * 2}px;
`;

export const ServiceInformationText = styled.p`
  margin-bottom: ${base_spacing};
  text-transform: uppercase;
`;
