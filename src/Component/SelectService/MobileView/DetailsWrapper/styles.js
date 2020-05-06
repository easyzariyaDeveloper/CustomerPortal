import styled from "styled-components";
import {
  alignHorizontally,
  alignCenter,
  flexColumn,
} from "../../../../Assets/common-styled";
import { base_spacing } from "../../../../Assets/style-var";

const shade = "#D3D3D3";
export const DetailsWrapper = styled.div`
  border: 1px solid black;
  margin-top: ${base_spacing * 2}px;
  ${flexColumn}
  text-align: center;
`;
export const AmountValue = styled.div`
  font-weight: bold;
  font-size: 24px;
`;
export const PackName = styled.div`
  width: 100%;
  background-color: ${shade};
  margin: 0 ${base_spacing}px;
  font-size: 20px;
  padding: ${base_spacing * 2}px 0;
`;
export const Amount = styled.div`
  width: 100%;
  padding: ${base_spacing}px;
  ${alignHorizontally}
  align-items:baseline;
`;

export const ServiceTime = styled.div`
  ${alignHorizontally};
  justify-content: center;
  padding: ${base_spacing}px 0;
  width: 100%;
  border-bottom: 1px solid black;
  color: grey;
`;
export const ListItem = styled.div`
  width: 100%;
  padding: ${base_spacing}px 0;
  background-color: ${({ num }) => (num % 2 == 0 ? shade : "white")};
`;

export const ServiceTimeContent = styled.p`
  margin: 0 ${base_spacing}px;
`;
