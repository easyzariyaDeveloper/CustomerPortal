import React from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
const useStyles = makeStyles(() => ({
  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  image: {
    height: "100px",
    width: "100px",
    flex: 1,
  },
  root: {
    margin: "16px auto",
  },
  flex: {
    marginLeft: "10px",
    flex: 2,
  },
}));
export default function CarItem({ car }) {
  const classes = useStyles();
  console.log(car);
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <img
          onClick={() => console.log("onClick")}
          src={car.car_img}
          className={classes.image}
        />
        <Box display="flex" flexDirection="column" className={classes.flex}>
          <Typography>{car.car}</Typography>
          <Typography>{car.model}</Typography>
          <Typography>{car.number_plate}</Typography>
          {car.last_service && car.last_service_date ? (
            <Typography>
              Car last serviced with {car.last_service} on{" "}
              {car.last_service_date}
            </Typography>
          ) : (
            ""
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
