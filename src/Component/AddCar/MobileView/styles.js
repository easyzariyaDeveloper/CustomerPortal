import {
  AddCarPageWrapper,
  CenterImage,
  ImageWrapper,
  ColorPallete,
} from "../styles";
import styled from "styled-components";
import { base_spacing } from "../../../Assets/style-var";
import backgroundBanner from "../../../Assets/img/garrage.jpg";

const image_wrapper_height = "250px";
export const AddCarPageMWrapper = styled(AddCarPageWrapper)`
  align-items: center;
  min-height: 800px;
  justify-content: flex-start;
  flex-direction: column;
  background-size: cover;
  background: #cdcdcd;
  padding: 6% 0;
`;

export const CenterMImage = styled(CenterImage)`
  width: 70%;
  height: 70%;
  padding-top: 0px;
`;
export const ImageMWrapper = styled(ImageWrapper)`
  flex: none;
  background: url(${backgroundBanner});
  height: ${image_wrapper_height};
  width: 100%;
  background-size: contain;
  margin: ${base_spacing}px 0;
`;

export const ColorMPallete = styled(ColorPallete)`
  padding-top: ${base_spacing * 2}px;
  max-width: unset;
  overflow: auto;
`;
export const AddCarPageMHeader = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  color: #4b4b4b;
  text-transform: capitalize;
`;
