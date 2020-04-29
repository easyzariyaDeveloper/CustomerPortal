import React, { useState } from "react";

import { StyledForm } from "./styles";
import SelectBox from "../../common/SelectBox";
import { Brands, Car } from "../mockData";
export default function index({ fields }) {
  const [brand, setBrand] = useState("0");
  const [car, setCar] = useState("0");
  const [type, setType] = useState("0");
  const [fuel_type, setFuelType] = useState("0");

  const brands = Brands.map((brand) => ({
    name: brand.name,
    value: brand.id,
  }));
  brands.unshift({ name: "Select Brand", value: "0" });
  const cars = Car[brand]
    ? Car[brand].map((car) => ({
        name: car.modelname,
        value: car.id,
      }))
    : [];
  cars.unshift({ name: "Select Car", value: "0" });
  const carObj = Car[brand]
    ? Car[brand].find((obj) => obj.id === car)
    : undefined;
  console.log(carObj);
  const types = carObj
    ? carObj.fuelvariant.map((variant) => ({
        value: variant.id,
        name: variant.name,
      }))
    : [];
  types.unshift({ name: "Select Type", value: "0" });

  const fuel_types =
    carObj && carObj["variant"] && carObj["variant"][type]
      ? carObj["variant"][type].map((ty) => ({ name: ty, value: ty }))
      : [];

  fuel_types.unshift({ name: "Select FuelType", value: "0" });
  const onBrandChange = (obj, ind) => {
    setBrand(obj.value);
    setFuelType("0");
    setType("0");
    setCar("0");
  };
  const onCarChange = (obj, ind) => {
    setCar(obj.value);
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
  return (
    <StyledForm>
      <SelectBox
        options={brands}
        defaultValue={brand}
        onChangeHandler={onBrandChange}
        disabled={false}
      />
      <SelectBox
        options={cars}
        defaultValue={car}
        onChangeHandler={onCarChange}
        disabled={brand === "0"}
      />
      <SelectBox
        options={types}
        defaultValue={type}
        onChangeHandler={onTypesChange}
        disabled={car === "0"}
      />
      <SelectBox
        options={fuel_types}
        defaultValue={fuel_type}
        onChangeHandler={onFuelTypeChange}
        disabled={type === "0"}
      />
    </StyledForm>
  );
}
