import styled from "styled-components";
import {
  PageHeader,
  PageWrapper,
  alignCenter,
  alignHorizontally,
} from "../../Assets/common-styled";
import backgroundBanner from "../../Assets/img/garrage.jpg";
import { base_spacing } from "../../Assets/style-var";

const color_dim = base_spacing * 4;
export const AddCarPageWrapper = styled.div`
  ${alignHorizontally};
  ${PageWrapper};
  background: url(${backgroundBanner});
  justify-content: space-around;
  background-size: contain;
  align-items: flex-center;
  padding: 8% 10%;
  padding-right: ${base_spacing * 10}px;
  min-height: 450px;
`;

export const AddCarPageHeader = styled.h1`
  ${PageHeader}
  letter-spacing: 8px;
  font-weight: 900;
  font-size: 56px;
  top: 80px;
  line-height: 56px;
  color: #f5f5f5;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 80px;
  right: 200px;
`;
export const CenterImage = styled.img`
  width: 60%;
  height: 60%;
`;
export const ColorPallete = styled.div`
  margin-top: ${base_spacing}px;
  display: flex;
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
  ${alignCenter}
  margin: auto;
  margin-left: 20%;
  display: flex;
  width: 400px;
  height: 400px;
  justify-content: center;
  flex-direction: column;
`;
export const SideAreaWrapper = styled.div`
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
