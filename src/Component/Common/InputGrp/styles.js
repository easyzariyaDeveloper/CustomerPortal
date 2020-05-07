import styled from "styled-components";
import { base_spacing } from "../../../Assets/style-var";
import { Attached, Labels } from "../../../Assets/common-styled";

export const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  flex: 1;
`;

export const InputGrp = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: ${base_spacing}px 0;
`;
export const TextInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  border: none;
  border-bottom: 1px solid #959595;
  flex: 1;
  margin: 2px;
  line-height: 24px;
  letter-spacing: 0.15px;
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 16px;
  ${({ isLabel }) => (isLabel ? Labels : "")}
  ${({ attached }) => (attached ? Attached : "")}
  &:disabled {
    border: none;
    background-color: #fff;
    color: #4b4b4b;
  }
  &:selected {
    border: none;
  }
  ::placeholder {
    color: grey;
  }
`;
