import React, { useState } from "react";

import { StyledForm } from "./styles";
import SelectBox from "../../Common/SelectBox";
import Select2 from "../../Common/Select2";

export default function index({ Brands, Car, onChangeListener = null }) {
  const [car_obj, setCarObj] = useState({
    brand: "0",
    car: "0",
    type: "0",
    fuel_type: "0",
  });
  const onChange = ({ target }) => {
    const name = target.name;
    let newCarObj = { ...car_obj };
    if (name === "brand")
      newCarObj = {
        ...car_obj,
        [name]: target.value,
        car: "0",
        type: "0",
        fuel_type: "0",
      };
    else if (name == "car") {
      newCarObj = {
        ...car_obj,
        [name]: target.value,
        type: "0",
        fuel_type: "0",
      };
    } else if (name === "types") {
      newCarObj = {
        ...car_obj,
        [name]: target.value,
        fuel_type: "0",
      };
    } else {
      newCarObj = {
        ...car_obj,
        [name]: target.value,
      };
    }
    setCarObj(newCarObj);
    onChangeListener ? onChangeListener(name, newCarObj) : null;
  };
  const brands = Brands.map((brand) => ({
    name: brand.name,
    value: brand.id,
  }));
  brands.unshift({ name: "Select Brand", value: "0" });
  const cars = Car[car_obj.brand]
    ? Car[car_obj.brand].map((car) => ({
        name: car.modelname,
        value: car.id,
      }))
    : [];
  cars.unshift({ name: "Select Car", value: "0" });
  const carObj = Car[car_obj.brand]
    ? Car[car_obj.brand].find((obj) => obj.id === car_obj.car)
    : undefined;
  const types = carObj
    ? carObj.fuelvariant.map((variant) => ({
        value: variant.id,
        name: variant.name,
      }))
    : [];
  types.unshift({ name: "Select Type", value: "0" });
  const fuel_types =
    carObj && carObj["variant"] && carObj["variant"][car_obj.type]
      ? carObj["variant"][car_obj.type].map((ty) => ({ name: ty, value: ty }))
      : [];
  fuel_types.unshift({ name: "Select FuelType", value: "0" });

  return (
    <StyledForm>
      <Select2
        name="brand"
        options={brands}
        defaultValue={car_obj.brand}
        onChangeHandler={onChange}
        disabled={false}
        placeholder = "Select Brand"
      />
      <Select2
        name="car"
        options={cars}
        defaultValue={car_obj.car}
        onChangeHandler={onChange}
        disabled={car_obj.brand === "0"}
        placeholder = "Select Car"
      />
      <SelectBox
        name="type"
        options={types}
        defaultValue={car_obj.type}
        onChangeHandler={onChange}
        disabled={car_obj.car === "0"}
      />
      <SelectBox
        name="fuel_type"
        options={fuel_types}
        defaultValue={car_obj.fuel_type}
        onChangeHandler={onChange}
        disabled={car_obj.type === "0"}
      />
    </StyledForm>
  );
}
