import {
  AddCarPageWrapper,
  CenterImage,
  ImageWrapper,
  ColorPallete,
} from "../styles";
import styled from "styled-components";
import { base_spacing } from "../../../Assets/style-var";
export const AddCarPageMWrapper = styled(AddCarPageWrapper)`
  align-items: center;
  min-height: 800px;
  justify-content: flex-start;
  flex-direction: column;
  background-size: cover;
`;

export const CenterMImage = styled(CenterImage)`
  width: 80%;
  height: 70%;
  padding-top: 0px;
`;
export const ImageMWrapper = styled(ImageWrapper)`
  flex: none;
`;

export const ColorMPallete = styled(ColorPallete)`
  padding-top: ${base_spacing * 2}px;
  max-width: unset;
  overflow: auto;
`;
