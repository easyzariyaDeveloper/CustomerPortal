import styled from "styled-components";

const footer_bg_color = "#C6caca";
const subfooter_bg_color = "#002366";
export const FooterWrapper = styled.div`
  background-color: ${footer_bg_color};
  height: fit-content;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10% 17%;
  justify-items: space-between;
`;

export const Link = styled.a`
  padding: 10px 0;
  flex: 1;
  cursor: pointer;
`;

export const SubFooter = styled.div`
  background: ${subfooter_bg_color};
  height: 40px;
  display: flex;
  justify-content: space-between;
  color: grey;
  font-size: 12px;
  padding: 15px 15%;
  align-items: center;
`;

export const TagLine = styled.div``;
export const SubFooterRight = styled.div``;
