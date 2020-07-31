import React, { useState } from "react";
import { connect } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import {useStyles} from "../../../Assets/common-styled";

import { ProfileActionButton, ProfileButtonWrapper, ProfileCard, PageLink,CarImage, CarDetailsCard, LabelHeading, KebabMenuCard, KebabMenuButton } from "./style";
import { withRouter } from "react-router-dom";

import {deleteCar, fetchProfile} from "../Data/action";
import DefaultCarImage from "../../../Assets/img/carIcon.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from '@material-ui/core/IconButton';

function MyCars(props) {
  const classes = useStyles();

  const [kebabMenu, setKebabMenu] = useState(false);

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
            return <CarDetailsCard>
              {car?.image ? <CarImage src = {car?.image}/>: <CarImage src = {DefaultCarImage}/>}
              <div>
                <div >
                  <MoreVertIcon style = {{padding: 0, float: "right"}} onClick={(event)=> setKebabMenu(!kebabMenu)}/>

                  {
                    kebabMenu ? <KebabMenuCard>
                      <KebabMenuButton onClick = {()=> {
                        props?.deleteCar(car.carId);
                        props?.fetchProfile()
                      }}>Remove Car</KebabMenuButton>

                      <KebabMenuButton onClick= {()=> location.href = `/add-car?carId=${car.carId}?redirect=/profile`
                      }>Edit Car</KebabMenuButton>
                    </KebabMenuCard> :null
                  }

                </div>
                {console.log(car.carId)}
                <LabelHeading>Brand: {car.brand? car.brand : "" } </LabelHeading>
                <LabelHeading>Car Model: {car.carName} </LabelHeading>
                <LabelHeading>Color: {car.color? car.color : "" } </LabelHeading>
                <LabelHeading>Reg Number: {car.reg? car.reg : "" } </LabelHeading>
              </div>
            </CarDetailsCard>
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
    deleteCar: (carId ="") =>{dispatch(deleteCar(carId))},
    fetchProfile: () => {dispatch(fetchProfile())},
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyCars));




