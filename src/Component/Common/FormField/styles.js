import styled from "styled-components";

const disabled_bg_color = "#d3d3d3";
const active_bg_color = "white";
const disabled_color = "grey";
const active_color = "grey";
export const StyledField = styled.select`
  width: 100%;
  padding: 10px 10px;
  margin: 15px 10px;
  color: ${({ disabled }) => (disabled ? disabled_color : active_color)}};
  background-color: ${({ disabled }) =>
    disabled ? disabled_bg_color : active_bg_color};
  height: 48px;
  border: 0;
  -webkit-box-shadow: 0px 0px 28px 11px rgba(69,59,69,0.6);
  -moz-box-shadow: 0px 0px 28px 11px rgba(69,59,69,0.6);
  box-shadow: 0px 0px 28px 11px rgba(69,59,69,0.6);

`;
