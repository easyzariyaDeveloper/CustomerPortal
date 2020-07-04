import React, { useState } from "react";
import clsx from 'clsx';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import HistoryIcon from '@material-ui/icons/History';
import { ProfileActionButton, ProfileButtonWrapper } from "./style";


const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTextField-root": {
        width: "80%",
        marginLeft: "9%",
        marginTop: "30px",

      }
    }, 
    margin: {
        marginLeft: "9%",
        marginTop: "30px"
    },
    textField: {
      width: "80%",
      size:"small"
    }
  }));
  
const carDetails = [['Car','car'],['Fuel Type','fuelType'],['Number Plate','numberPlate']];

export default function MyCars(){
    const classes = useStyles();

    const [values, setValues] = useState({
      car:'',
      fuelType:'',
      numberPlate:'',
      lastService:''
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
          {
              carDetails.map(carElement =>{
                  return <TextField
                    required
                    id="outlined-required"
                    label={carElement[0]}
                    value= {values["carElement[1]"]}
                    onChange={handleChange(carElement[1])}
                    variant="outlined"
                    margin="dense"
                />
        
              })
          }

            <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined" size="small"
            >
            <InputLabel htmlFor="outlined-adornment-name">Last Service</InputLabel>
            <OutlinedInput
              id="outlined-adornment-lastService"
              type= "text"
              value={values.lastService}
              onChange={handleChange('lastService')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <HistoryIcon />
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={100}
            />
          </FormControl>

          <ProfileButtonWrapper>
            <ProfileActionButton>Add Car</ProfileActionButton>
          </ProfileButtonWrapper>
        
      </div>
    </form>
  );
}






