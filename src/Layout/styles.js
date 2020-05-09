import styled from "styled-components";
import { mobile_header_height } from "./MobileView/Header/styles";

export const PageWrapper = styled.div`
  position: relative;
`;

export const Content = styled.div`
  min-height: calc(100vh - ${mobile_header_height}px);
  background: white;
  padding: 16px;
`;
