import styled from "styled-components";
import { font_color, base_spacing } from "../../../Assets/style-var";
import { alignCenter } from "../../../Assets/common-styled";

export const SelectWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 40px;
  margin: ${1.5 * base_spacing}px;
  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
`;

export const SelectPara = styled.p`
  color: ${font_color};
  width: 100%;
  height: 100%;
  margin: 0;
  ${alignCenter}
  background-color: white;
  border-radius: 2px;
`;

export const Select = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  height: 100%;
  opacity: 0;
`;

export const Option = styled.option`
  height: 40px;
  line-height: 40px;
  padding: ${base_spacing / 2}px;
`;
