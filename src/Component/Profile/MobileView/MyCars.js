import React, { useState } from "react";
import { connect } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import {useStyles} from "../../../Assets/common-styled";

import { ProfileActionButton, ProfileButtonWrapper, ProfileCard, PageLink,CarImage, CarDetailsCard, LabelHeading } from "./style";
import { withRouter } from "react-router-dom";

import {deleteCar, fetchProfile} from "../Data/action";
import DefaultCarImage from "../../../Assets/img/carIcon.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from '@material-ui/core/IconButton';

function MyCars(props) {
  const classes = useStyles();

  const [kebabMenu, setKebabMenu] = useState(null);

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
                <IconButton aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={(event)=> setKebabMenu(event.currentTarget)}
                    style = {{float: "right"}}>
                  <MoreVertIcon/>
                  </IconButton>

                  <Menu
                    id="long-menu"
                    keepMounted
                    open={Boolean(kebabMenu)}
                    onClose={()=> setKebabMenu(null)}
                    PaperProps={{
                      root:{
                        postion: "absolute",
                        top:"10px",
                        right:"10px"
                      },
                      style: {
                        width: "20ch",

                      }
                    }}
                  >
                      <MenuItem selected
                        onClick={()=> {
                          setKebabMenu(null);
                          props?.deleteCar(car.carId);
                          props?.fetchProfile()
                        }}
                      >Remove</MenuItem>
                      <MenuItem                   
                        onClick={()=> {
                          location.href = `/add-car?carId=${car.carId}?redirect=/profile`
                          setKebabMenu(null)}}
                      >Edit</MenuItem>
                  </Menu>
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




