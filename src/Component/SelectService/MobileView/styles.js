import styled from "styled-components";
import { base_spacing } from "../../../Assets/style-var";
import { alignHorizontally, flexColumn } from "../../../Assets/common-styled";

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Select = styled.select`
  width: 35%;
  border: none;
  color: #333;
  height: ${base_spacing * 3.5}px;
  text-align: center;
  font-size: 12px;
`;
export const SelectServicePageWrapper = styled.div`
  padding: 5%;
  text-align-last: center;
`;
