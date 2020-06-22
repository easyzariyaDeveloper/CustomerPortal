import styled from "styled-components";
import SelectYourCar from "../../../Assets/img/SelectYourCar.jpg"
import { base_spacing } from "../../../Assets/style-var";


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
  background: #BDBDBD;
  border-radius: 6px;
  margin: 20px auto;
  display: block;
  color: white;
  height: 30px;
  width: 90px;
  border: none;
  cursor:pointer;
`; // background-color: ${(disabled == false? blue :red)};

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
  width:15px;
  height:15px;
  border: 0.01px solid black;
  margin: 0 5px;
  cursor: pointer;
`;

