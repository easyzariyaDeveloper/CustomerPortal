import React, { useState } from "react";
import clsx from 'clsx';
import { connect } from 'react-redux';
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import HistoryIcon from '@material-ui/icons/History';
import Skeleton from '@material-ui/lab/Skeleton';
import {useStyles} from "../../../Assets/common-styled";

import { ProfileActionButton, ProfileButtonWrapper, ProfileCard } from "./style";
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
            {
              carDetails.map(carElement => {
                return (
                  <FormControl className={clsx(classes.textField)} variant="outlined" size="small">
                    <InputLabel htmlFor="outlined-adornment-name">{carElement[0]}</InputLabel>
                    <OutlinedInput
                      required
                      id="outlined-adornment-name"
                      label={carElement[0]}
                      value={values["carElement[1]"]}
                      onChange={handleChange(carElement[1])}
                    />
                  </FormControl>

                )
              })
            }

          <FormControl className={clsx(classes.textField)} variant="outlined" size="small">
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




