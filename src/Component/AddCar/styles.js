import styled from "styled-components";
import {
  flexColumn,
  PageHeader,
  PageWrapper,
} from "../../Assets/common-styled";

export const AddCarPageWrapper = styled.div`
  ${flexColumn}
  ${PageWrapper}
  background-size: cover;
  align-items: flex-start;
  padding: 8% 10%;
`;

export const AddCarPageHeader = styled.h1`
  ${PageHeader}
  letter-spacing: 8px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  right: 12%;
`;
