import React, { useState, useEffect } from "react";
import { Cars } from "../../MockData";
import CarItem from "./CarItem";
import { Typography, makeStyles } from "@material-ui/core";
import ActionButton from "../../../Common/ActionButton";
const useStyles = makeStyles({
  cars: {
    textTransform: "uppercase",
    margin: "20px 10px 10px 10px",
  },
});
export default function CarList() {
  const classes = useStyles();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    setCars(Cars);
  }, []);
  return (
    <div>
      <Typography className={classes.cars}>{cars.length} Saved Cars</Typography>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
      <ActionButton label={"Add a new Car"} />
    </div>
  );
}
