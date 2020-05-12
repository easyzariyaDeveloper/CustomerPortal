import styled from "styled-components";
import { base_spacing } from "../../../Assets/style-var";
import { StyledLink } from "../../../Assets/common-styled";

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
export const Link = styled(StyledLink)`
  color: white;
  padding: 0 ${base_spacing}px;
`;
