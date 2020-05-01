import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { AddCarPageHeader, ColorSquare } from "../styles";
import AddCarForm from "../AddCarForm";
import { Brands, Car } from "../mockData";
import {
  AddCarPageMWrapper,
  CenterMImage,
  ImageMWrapper,
  ColorMPallete,
} from "./styles";
export default function AddCar() {
  const [brand, setBrand] = useState("0");
  const [car, setCar] = useState("0");
  const [type, setType] = useState("0");
  const [fuel_type, setFuelType] = useState("0");
  const [center_img, setCenterImg] = useState("");
  const onBrandChange = (obj, ind) => {
    setBrand(obj.value);
    if (obj.value !== "0") displayBrand(obj.value);
    setFuelType("0");
    setType("0");
    setCar("0");
  };

  const onCarChange = (obj, ind) => {
    setCar(obj.value);
    if (obj.value === "0") displayBrand(brand);
    else displayCar(obj.value);
    setType("0");
    setFuelType("0");
  };
  const onTypesChange = (obj, ind) => {
    setType(obj.value);
    setFuelType("0");
  };
  const onFuelTypeChange = (obj, ind) => {
    setFuelType(obj.value);
  };
  const displayBrand = (brand) => {
    const brand_url = Brands.find((brandObj) => brandObj.id === brand).logo;
    setCenterImg(brand_url);
  };
  const displayCar = (car, color) => {
    const car_obj = Car[brand].find((carObject) => carObject.id === car);
    const color_variant_with_img = car_obj.colorvariant.filter((c) =>
      c.url ? true : false
    );

    const base_color = color
      ? color
      : car_obj.baseColorVariant ||
        (color_variant_with_img.length > 0 ? color_variant_with_img[0].id : "");
    const car_url = color_variant_with_img.find(
      (car_variant) => car_variant.id === base_color
    ).url;
    setCenterImg(car_url);
  };
  const carObject =
    Car[brand] && car !== "0"
      ? Car[brand].find((carObject) => carObject.id === car)
      : {};
  const colors = carObject.colorvariant || [];
  const colorsContent = colors.map((color, key) => (
    <ColorSquare
      key={key}
      color={color.id}
      onClick={() => displayCar(car, color.id)}
    />
  ));
  return (
    <MobilePageLayout>
      <AddCarPageMWrapper>
        <AddCarForm
          Brands={Brands}
          Car={Car}
          car={car}
          brand={brand}
          type={type}
          fuel_type={fuel_type}
          onBrandChange={onBrandChange}
          onCarChange={onCarChange}
          onFuelTypeChange={onFuelTypeChange}
          onTypesChange={onTypesChange}
        />
        <ImageMWrapper>
          {brand !== "0" ? <CenterMImage src={center_img} /> : ""}
        </ImageMWrapper>
        {car !== "0" ? <ColorMPallete>{colorsContent}</ColorMPallete> : ""}
      </AddCarPageMWrapper>
    </MobilePageLayout>
  );
}
