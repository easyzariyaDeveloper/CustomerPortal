import React, { useState } from "react";
import { Box, Header, Button } from "../styles";
import { Cars } from "../MockData";
import { CarsContent, CarList } from "./styles";
import CarItem from "./CarItem";
export default function MyCar() {
  const [cars, setCars] = useState(
    Cars.map((car) => ({ ...car, disabled: true }))
  );
  const onChange = (id, e) => {
    const { target } = e;
    setCars(
      [...cars].map((car) =>
        car.id === id ? { ...car, [target.name]: target.value } : car
      )
    );
  };
  const onEdit = (id) => {
    setCars(
      [...cars].map((car) =>
        car.id === id ? { ...car, disabled: !car.disabled } : car
      )
    );
  };
  const OnDelete = (id) => {
    const newCars = [...cars].filter((car) => car.id !== id);
    setCars(newCars);
  };
  const addCar = () => {
    console.log("car addition");
  };
  return (
    <Box>
      <Header>My Cars</Header>
      <CarsContent>
        <CarList>
          {cars.map((car) => (
            <CarItem
              disabled={car.disabled}
              key={car.id}
              onChange={onChange}
              onEdit={onEdit}
              onDelete={OnDelete}
              car={car}
            />
          ))}
        </CarList>
        <Button onClick={addCar}>Add New Car</Button>
      </CarsContent>
    </Box>
  );
}
