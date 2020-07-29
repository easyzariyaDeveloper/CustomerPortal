import React, { useState } from "react";
import { connect } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import {useStyles} from "../../../Assets/common-styled";

import { ProfileActionButton, ProfileButtonWrapper, ProfileCard, PageLink } from "./style";
import { withRouter } from "react-router-dom";

import {deleteCar} from "../Data/action"


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

  function deleteCar(car){
    /* deleteCar to be Called onClick */
  }

  return (
    <div className={classes.root}>
      {
        props?.profile?.inProgress ?
          <Skeleton animation="wave" height={300} width="100%" /> :
          <div>
          <ProfileCard>
            <ProfileButtonWrapper>
            <ProfileActionButton>
              <PageLink href = "/add-car?redirect=/profile">
                Add Car
              </PageLink>
            </ProfileActionButton>
            </ProfileButtonWrapper>
        </ProfileCard>
        
        {
          props?.profile?.carList ? props?.profile?.carList.map(car =>{
            return <ProfileCard>
              {car.carId}
              <button onClick={deleteCar}>Remove Car</button>
            </ProfileCard>
          }) :null
        }
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    deleteCar:(car) =>{dispatch(deleteCar(car))}
  }
}

export default withRouter(connect(mapStateToProps, null)(MyCars));




