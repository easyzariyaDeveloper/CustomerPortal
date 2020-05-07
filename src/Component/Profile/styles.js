import styled from "styled-components";
import { base_spacing } from "../../Assets/style-var";

export const ProfilePageWrapper = styled.div`
  display: flex;
  min-height: 500px;
  padding: 5% 10%;
`;
export const Header = styled.h1`
  font-weight: 900;
  font-size: 42px;
  text-align: center;
  line-height: 48px;
  color: #4b4b4b;
  padding-bottom: ${base_spacing * 3}px;
  border-bottom: 1px solid #d5d5d5;
`;
export const Box = styled.div`
  border: 1px solid #cdcdcd;
  padding: ${base_spacing * 3}px 0;
  height: fit-content;
  width: 861px;
  padding-bottom: 0px;
`;

export const Button = styled.button`
  border: 0.677266px solid #262626;
  color: #262626;
  padding: ${base_spacing}px 2%;
  background-color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.15px;
  margin: 5%;
`;
