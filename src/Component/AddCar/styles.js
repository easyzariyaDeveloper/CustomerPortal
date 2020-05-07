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
  ${alignHorizontally};
  ${PageWrapper};
  background: url(${backgroundBanner});
  justify-content: flex-start;
  background-size: contain;
  align-items: flex-start;
  padding: 6% 10%;
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
  bottom: 5%;
  right: 20%;
`;
export const CenterImage = styled.img`
  width: 80%;
  height: 80%;
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
  padding-top: ${base_spacing * 2}px;
  ${alignCenter}
  margin-left:15%;
  margin-top: 10%;
  display: flex;
  width: 400px;
  height: 400px;
  justify-content: space-between;
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
