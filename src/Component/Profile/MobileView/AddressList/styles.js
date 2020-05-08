import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  alignHorizontally,
  alignCenter,
} from "../../../../Assets/common-styled";

export const StyledLink = styled(Link)`
  text-decoration: none;
  ${alignCenter}
`;
