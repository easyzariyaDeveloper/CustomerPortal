import styled from "styled-components";
import { mobile_header_height } from "./MobileView/Header/styles";
import { page_bg_color, base_spacing, ez_primary_theme_color } from "../Assets/style-var";
import { alignCenter } from "../Assets/common-styled";

export const PageWrapper = styled.div`
  position: relative;
`;

export const Content = styled.div`
  min-height: calc(100vh - ${mobile_header_height}px);
  background: ${page_bg_color};
`;

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(0,0,0,0.6);
  text-align:center;
  ${alignCenter}
`;

export const LoaderDiv = styled.div`
  border-radius: 10px;
  width: 120px;
  padding: 10px;
  background: white;

  img{
    width: 100%;
  }
`;

export const WaitingText = styled.p`
  padding-top: ${base_spacing / 2}px;
  font-style: italic;
  color: ${ez_primary_theme_color}
`;