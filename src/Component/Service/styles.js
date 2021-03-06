import styled from "styled-components";
import backgroundBanner from "../../Assets/img/services_page_bg.jpg";

const dark_font_color = "#02133C";
const base_spacing = "10";
import { flexColumn, alignCenter } from "../../Assets/common-styled";
export const ServicePageWrapper = styled.div`
  background: url(${backgroundBanner});
  background-size: cover;
  min-height: 750px;
  position: relative;
  ${alignCenter};
  justify-content: space-around;
`;

export const ServicePageHeader = styled.h1`
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 55px;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
`;

export const ServiceData = styled.section`
  max-width: 400px;
  background: white;
  line-height: 1.75em;
  padding: ${base_spacing * 2.5}px;
  float: left;
  ${flexColumn};
  height: 346px;
  text-align: center;
`;

export const ServiceDataHeader = styled.h2`
  color: ${dark_font_color};
  margin-bottom: ${base_spacing * 3}px;
  font-size: 30px;
  flex-basis: 1;
  font-weight: bolder;
`;

export const ServiceDataInfo = styled.p`
  color: black;
  margin-bottom: ${base_spacing * 3}px;
  flex-basis: 1;
`;
