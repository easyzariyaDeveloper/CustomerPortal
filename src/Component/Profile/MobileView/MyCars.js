import React, { useState } from "react";
import clsx from 'clsx';
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import HistoryIcon from '@material-ui/icons/History';
import Skeleton from '@material-ui/lab/Skeleton';

import { ProfileActionButton, ProfileButtonWrapper, ProfileCard, useStyles } from "./style";
const carDetails = [['Car', 'car'], ['Fuel Type', 'fuelType'], ['Number Plate', 'numberPlate']];

function MyCars(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    car: '',
    fuelType: '',
    numberPlate: '',
    lastService: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  return (
    <div className={classes.root}>
      {
        props?.profile?.inProgress ?
          <Skeleton animation="wave" height={300} width="100%" /> :
          <ProfileCard>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                {
                  carDetails.map(carElement => {
                    return <TextField
                      required
                      id="outlined-required"
                      label={carElement[0]}
                      value={values["carElement[1]"]}
                      onChange={handleChange(carElement[1])}
                      variant="outlined"
                      margin="dense"
                    />

                  })
                }

                <FormControl className={classes.root} variant="outlined" size="small">
                  <InputLabel htmlFor="outlined-adornment-name">Last Service</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-lastService"
                    type="text"
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
          </ProfileCard>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, null)(MyCars);




