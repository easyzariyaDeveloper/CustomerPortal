import styled from "styled-components";
import { white_color, base_spacing } from "../../Assets/style-var";

export const FooterContainer = styled.div`
  height: fit-content;
  color: ${white_color};
`;

export const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${base_spacing * 5}px 0;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
`;

export const Link = styled.a`
  padding: 10px 0;
  flex: 1;
  cursor: pointer;
`;

export const SubFooter = styled.div`
  background: ${white_color};
  height: 40px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 15px 15%;
  align-items: center;
`;

export const TagLine = styled.div``;
export const SubFooterRight = styled.div``;
