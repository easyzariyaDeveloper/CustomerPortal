import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import {useStyles} from "../../../Assets/common-styled";

import { ProfileActionButton, ProfileButtonWrapper, ProfileCard, PageLink,CarImage, CarDetailsCard, LabelHeading, KebabMenuCard, KebabMenuButton } from "./style";
import { withRouter } from "react-router-dom";

import {deleteCar, fetchProfile} from "../Data/action";
import DefaultCarImage from "../../../Assets/img/carIcon.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function MyCars(props) {
  const classes = useStyles();

  const [indexForActionButton, SetIndexForActionButton] = useState(-1);

  const [values, setValues] = useState({
    car: '',
    fuelType: '',
    numberPlate: '',
    lastService: ''
  });

  useEffect(() => {
    props?.fetchProfile();
  },[props?.profile?.carList?.length])

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function setActiveActionCard(index){
    SetIndexForActionButton(indexForActionButton === index ? -1 : index)
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
          props?.profile?.carList ? props?.profile?.carList.map((car, index) => {
            return <CarDetailsCard>
              <CarImage src = {car?.image || DefaultCarImage}/>
              <div>
                <div>
                  <MoreVertIcon style = {{padding: 0, float: "right"}} onClick = {setActiveActionCard.bind(null, index)}/>
                  {
                    index === indexForActionButton ? <KebabMenuCard>
                        <KebabMenuButton onClick = {()=> {
                          props?.deleteCar(car.id);
                          // props?.fetchProfile();
                          SetIndexForActionButton(-1);
                        }}>Remove</KebabMenuButton>

                        <KebabMenuButton 
                          onClick= {()=> location.href = `/add-car?carId=${car.carId}&fuelVariantId=${car.fuelVariantId}&id=${car.id}&redirect=/profile/cars`}>
                            Edit
                        </KebabMenuButton>
                      </KebabMenuCard> : null
                  }
                </div>
                <LabelHeading>
                  <label> Brand: </label> {car.brand ? car?.brand.toLowerCase() : "" } </LabelHeading>
                <LabelHeading>  <label> Car Model: </label> {car?.carName.toLowerCase()} </LabelHeading>
                <LabelHeading> <label> Fuel Type: </label> {car.variantName? car.variantName : "" } </LabelHeading>
                {/* <LabelHeading> <label> Color: </label>  {car.color? car.color : "" } </LabelHeading> */}
                <LabelHeading> <label> Reg Number: </label> {car.registrationNum? car.registrationNum : "" } </LabelHeading>
                <LabelHeading> <label> Make Year: </label> {car.makeYear? car.makeYear : "" } </LabelHeading>
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



