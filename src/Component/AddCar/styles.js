import styled from "styled-components";
import {
  flexColumn,
  PageHeader,
  PageWrapper,
  alignCenter,
  alignHorizontally,
} from "../../Assets/common-styled";
import backgroundBanner from "../../Assets/img/garrage.jpg";
import { base_spacing } from "../../Assets/style-var";

const color_dim = base_spacing * 4;
export const AddCarPageWrapper = styled.div`
  ${alignHorizontally}
  ${PageWrapper}
  background: url(${backgroundBanner});
  justify-content :space-between;
  background-size: contain;
  align-items: flex-start;
  padding: 6% 10%;
  min-height: 450px;
  
`;

export const AddCarPageHeader = styled.h1`
  ${PageHeader}
  letter-spacing: 8px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: -5%;
  right: 10%;
`;
export const CenterImage = styled.img`
  width: 500px;
  height: 300px;
`;
export const ColorPallete = styled.div`
  margin-top: ${base_spacing}px;
  display: flex;
  max-width: ${color_dim * 2.5}px;
  flex-wrap: wrap;
  margin: ${base_spacing}px auto;
`;
export const ColorSquare = styled.div`
  background-color: ${({ color }) => color};
  width: ${color_dim}px;
  margin: ${base_spacing / 2}px;
  height: ${color_dim}px;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
`;
export const ImageWrapper = styled.div`
  padding-top: ${base_spacing * 2}px;
  ${alignCenter}
  flex: 2;
  margin-top: 10%;
`;
export const SideAreaWrapper = styled.div`
  flex: 1;
  min-height: 450px;
  position: relative;
  ${alignHorizontally}
`;
export const ColorBoxWrapper = styled.div`
  text-align: center;
  align-items: center;
  padding-top: ${2 * base_spacing}px;
`;
export const ColumnHeader = styled.h2`
  font-size: 40px;
  color: white;
  font-weight: bold;
`;
