import styled from "styled-components";
import SelectYourCar from "../../../Assets/img/SelectYourCar.jpg"
import { ez_button_color, disabled_button_color } from "../../../Assets/style-var";


export const MAddCarPageWrapper = styled.div`
    position: relative;
`;

export const ImageMWrapper = styled.div`
  background: url(${SelectYourCar});
  height: 250px;
  width: 100%;
  background-size: cover;
  text-align:center;
`;

export const MCarCard = styled.div`
  background: white;
  position: relative;
  top: -44px;
  border-radius: 10px;
  padding: 10px;
  z-index:2;
`;

export const ConfirmButton = styled.button`
  border-radius: 6px;
  margin: 20px auto;
  display: block;
  color: white;
  height: 40px;
  width: 100%;
  border: none;
  cursor:pointer;
  background-color: ${({disabled}) => disabled ? disabled_button_color : ez_button_color}
`;

export const LogoImg = styled.img`
  height:100px;
  width:80%;
  vertical align:middle
`;

export const CarImg = styled.img`
  height:100px;
  width:80%;
  vertical align:middle
`;

export const ColorMPallete = styled.div`
  display:flex;
  justify-content: center;
  padding: 10px;
`;

export const ColorSpan = styled.div`
  background-color: ${({ color }) => color};
  border-radius:50%;
  width: 20px;
  height: 20px;
  border: 1px solid white;
  margin: 0 5px;
  cursor: pointer;
`;

