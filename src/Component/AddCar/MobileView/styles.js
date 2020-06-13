import {
  AddCarPageWrapper,
  CenterImage,
  ImageWrapper,
  ColorPallete,
  ColorSquare,
} from "../styles";
import styled from "styled-components";
import { base_spacing } from "../../../Assets/style-var";
import backgroundBanner from "../../../Assets/img/SelectYourCar.jpg";

const image_wrapper_height = "250px";
export const AddCarPageMWrapper = styled(AddCarPageWrapper)`
  align-items: center;
  min-height: calc(100vh - 64px);
  justify-content: flex-start;
  flex-direction: column;
  background-size: cover;
  background: #cdcdcd;
  padding: 6% 0;
  position:relative;
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
  background-size: cover;
  margin: ${base_spacing}px 0;
`;

export const ColorMPallete = styled(ColorPallete)`
  padding-top: ${base_spacing}px;
  max-width: unset;
  overflow: auto;
  margin:0px;
 
  `;

  export const ColorMSquare = styled(ColorSquare)`
    height:20px;
    width:20px;
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


export const MCarCard = styled.div`
  background: white;
  position: absolute;
  top: 290px;
  width: 75%;
  border-radius: 10px;
`;