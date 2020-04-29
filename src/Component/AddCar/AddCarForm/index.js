import React, { useState } from "react";

import { StyledForm } from "./styles";
import SelectBox from "../../common/SelectBox";

export default function index({
  Brands,
  Car,
  onBrandChange,
  onCarChange,
  onFuelTypeChange,
  onTypesChange,
  brand,
  car,
  fuel_type,
  type,
}) {
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
