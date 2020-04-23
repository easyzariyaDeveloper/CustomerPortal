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
export const AboutCompany = styled.div`
  flex: 1;
  display: flex;
  justify-items: center;
  flex-direction: column;
  padding: 0 5%;
`;
export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.5px;
`;
export const AboutCompanyText = styled.p`
  line-height: 1.5em;
  padding: 12% 0;
`;
export const CompanyConnect = styled.div`
  flex: display;
  justify-content: space-around;
`;
export const ConnectIconFb = styled.img``;
export const ConnectIconTw = styled.img``;
export const ConnectIconIn = styled.img``;
export const ConnectIconYt = styled.img``;

export const QuickLinks = styled.div`
  flex: 1;
  padding: 0 5%;
  font-weight: bold;
`;

export const QuickLinksSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`;
export const QuickLinkHeader = styled.h1`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const QuickLinksRow = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;
export const Link = styled.a`
  padding: 10px 0;
  flex: 1;
  cursor: pointer;
`;

export const ContactBox = styled.div`
  flex: 1;
  padding: 0 5%;
`;
export const ContactBoxHeader = QuickLinkHeader;
export const ContactColumn = styled.div`
  display: flex;
  padding-top: 15px;
  flex-direction: column;
`;
export const ContactHead = styled.div`
  display: flex;
  padding: 10px 0;
  flex-direction: row;
`;
export const ContactIcon = styled.p``;
export const ContactInfo = styled.p`
  padding-left: 15px;
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
