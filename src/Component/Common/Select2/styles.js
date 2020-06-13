import styled from "styled-components";
import { font_color, base_spacing } from "../../../Assets/style-var";
import Select from "react-select";


export const StyledSelect = styled(Select)`
  width: 200px;
  text-align: center;
  height: 40px;
  margin: ${1.5 * base_spacing}px 0;
`;

export const StyledSelectWrapper = styled.div`
  position: relative
`;