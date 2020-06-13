import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import AddCarForm from "../AddCarForm";
import { displayBrand, displayCar, getCarObject } from "../utils";
import { Brands, Car } from "../mockData";
import {
  AddCarPageMWrapper,
  CenterMImage,
  ImageMWrapper,
  ColorMPallete,
  AddCarPageMHeader,
  MCarCard,
  ColorMSquare
} from "./styles";


export default function AddCar() {
  const [center_img, setCenterImg] = useState("");
  const [carObj, setCarObj] = useState({
    brand: "0",
    car: "0",
    type: "0",
    fuel_type: "0",
  });
  
  const onChangeListener = (name, carObj) => {
    if (
      (name === "brand" && carObj.brand !== "0") ||
      (name === "car" && carObj.car == "0")
    )
      setCenterImg(displayBrand(carObj, Brands));
    else if (name === "car" && carObj.car !== "0")
      setCenterImg(displayCar(carObj, Car));
    setCarObj(carObj);
  };

  const carObject = getCarObject(carObj, Car);


  const colors = carObject.colorvariant || [];

  return (
    <MobilePageLayout>
      <AddCarPageMWrapper>
        <AddCarPageMHeader>Select your car</AddCarPageMHeader>
        <ImageMWrapper>
          {carObj.brand !== "0" ? <CenterMImage src={center_img} /> : ""}
        </ImageMWrapper>
        <MCarCard>
        {carObj.car !== "0" ? (
          <ColorMPallete>
            {colors.map((color, key) => (
              <ColorMSquare
                key={key}
                color={color.id}
                onClick={() => setCenterImg(displayCar(carObj, Car, color.id))}
              />
            ))}
          </ColorMPallete>
        ) : (
          ""
        )}
        <AddCarForm
          Brands={Brands}
          Car={Car}
          onChangeListener={onChangeListener}
        />
        </MCarCard>
      </AddCarPageMWrapper>
    </MobilePageLayout>
  );
}
