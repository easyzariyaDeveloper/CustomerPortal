import styled from "styled-components";
import { base_spacing } from "../../../../Assets/style-var";

export const Item = styled.div`
  display: flex;
  border: 1px solid #d5d5d5;
  padding: ${base_spacing}px 0;
`;

export const AddressInfo = styled.div`
  flex: 2;
  padding: ${base_spacing / 2}px 5%;
`;

export const AddressDetail = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 60%;
`;
export const AddressLines = styled.div``;
