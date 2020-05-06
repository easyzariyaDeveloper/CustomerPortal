import React, { useState } from "react";
import {
  AddCarPageWrapper,
  AddCarPageHeader,
  ButtonWrapper,
  CenterImage,
  ImageWrapper,
  SideAreaWrapper,
  ColorBoxWrapper,
  ColorPallete,
  ColorSquare,
  ColumnHeader,
} from "./styles";
import PageLayout from "../../Layout";
import AddCarForm from "./AddCarForm";
import { displayBrand, displayCar, getCarObject } from "./utils";
import ActionButton from "../Common/ActionButton";
import { Brands, Car } from "./mockData";

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
  const colorsContent = colors.map((color, key) => (
    <ColorSquare
      key={key}
      color={color.id}
      onClick={() => setCenterImg(displayCar(carObj, Car, color.id))}
    />
  ));
  return (
    <PageLayout>
      <AddCarPageWrapper className="grey-gradient">
        <AddCarPageHeader>Select Car</AddCarPageHeader>
        <SideAreaWrapper>
          <AddCarForm
            Brands={Brands}
            Car={Car}
            onChangeListener={onChangeListener}
          />
        </SideAreaWrapper>
        <ImageWrapper>
          {carObj.brand !== "0" ? <CenterImage src={center_img} /> : ""}
          {carObj.car !== "0" ? (
            <ColorBoxWrapper>
              <ColorPallete>{colorsContent}</ColorPallete>
            </ColorBoxWrapper>
          ) : (
            ""
          )}
        </ImageWrapper>

        <ButtonWrapper>
          <ActionButton
            disabled={carObj.fuel_type === "0"}
            label="Confirm"
            onClick={() => console.log("Car added")}
          />
        </ButtonWrapper>
      </AddCarPageWrapper>
    </PageLayout>
  );
}
