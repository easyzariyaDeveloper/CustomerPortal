import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, Typography, TextField, Box } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
const useStyles = makeStyles({
  root: {
    padding: "8px",
    margin: "10px 0",
  },
  cardContent: {
    padding: 0,
    paddingBottom: 0,
  },
  title: {
    fontSize: 16,
    margin: "0 10px 0 0",
  },
  label: {
    margin: "auto 10px",
    fontSize: 12,
    textTransform: "uppercase",
  },
  box: {
    margin: "10px 0",
  },
});
export default function AddressItem({ onDelete, address, ...props }) {
  const classes = useStyles();
  console.log(address);
  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <Box
            className={classes.box}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box display="flex" flexDirection="row">
              <Typography className={classes.title}>{address.name}</Typography>
              <Box alignContent="center" display="flex" justifyContent="center">
                <Typography className={classes.label}>
                  {address.label}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Link to={"edit-address/" + address.id}>
                <EditIcon fontSize="small" />{" "}
              </Link>
            </Box>
          </Box>
          <Box className={classes.box}>
            <Typography>
              {address.line1}
              {", "} {address.line2}
              {", "} {address.city}
              {", "} {address.state}
              {" - "}
              {address.pincode}
            </Typography>
          </Box>
          <Box className={classes.box}>
            <Typography>{address.phone}</Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
