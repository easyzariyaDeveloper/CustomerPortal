import React, { useEffect, useState } from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ChangePasswordButton, ProfileButtonWrapper, 
  ProfileActionButton, CollapseLabel,
  ProfileCard, ChangePasswordDiv,PasswordSaveButton,CancelIcon} from "./style";
import {useStyles} from "../../../Assets/common-styled";
import { connect } from 'react-redux';
import Collapse from "@material-ui/core/Collapse";
import Skeleton from '@material-ui/lab/Skeleton';

const profileDetails = { 'Name': 'name', 'Email': 'email', 'Phone Number': 'phone' };
const profileDetailsArray = Object.entries(profileDetails);

function MyProfile(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    showOldPassword: false,
    showNewPassword: false,
    showConfirmNewPassword: false,
  });

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setValues({
      name: props?.profile?.userName,
      email: props?.profile?.email,
      phone: props?.profile?.primaryPhone
    });

  }, [props?.profile.customerId]);


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  const handleClickShowPassword = (prop) => (event) => {
    if (prop === 'showOldPassword') {
      setValues({ ...values, [prop]: !values.showOldPassword });
    }
    else if (prop === 'showNewPassword') {
      setValues({ ...values, [prop]: !values.showNewPassword });
    }
    else {
      setValues({ ...values, [prop]: !values.showConfirmNewPassword });
    }
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      
        {props?.profile?.inProgress?
        <Skeleton animation="wave" height={250} width="100%"  />:<Collapse in={!collapsed} collapsedHeight={0}>
        <ProfileCard> 
        <div>{
          profileDetailsArray.map(element => {
            return (<FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined" size="small"
            >
              <InputLabel htmlFor="outlined-adornment-name">{element[0]}</InputLabel>
              <OutlinedInput
                id="outlined-adornment-name"
                type={element[0] === "Phone Number" ? "number" : "text"}
                value={values[element[1]]}
                onChange={handleChange(element[1])}
                labelWidth={element[0].length * 9}
              />
            </FormControl>
            )
          })}
        </div>
        <ProfileButtonWrapper>
          <ProfileActionButton> Save </ProfileActionButton>
        </ProfileButtonWrapper>
      </ProfileCard>
      </Collapse>}
      
      

      <Collapse in={collapsed} collapsedHeight={60}>
        <ProfileCard>
          <ChangePasswordDiv>
            {
              collapsed ? <CollapseLabel>
                Change Password
                  <CancelIcon onClick = {() => setCollapsed(!collapsed)}/>
              </CollapseLabel> : 
              <ChangePasswordButton onClick={() => setCollapsed(!collapsed)}> Change Password</ChangePasswordButton>
            }
          </ChangePasswordDiv>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
            <InputLabel htmlFor="outlined-adornment-password">Old Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showOldPassword ? 'text' : 'password'}
              value={values.oldPassword}
              onChange={handleChange('oldPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword('showOldPassword')}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showOldPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={100}
            />
          </FormControl>

          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
            <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showNewPassword ? 'text' : 'password'}
              value={values.newPassword}
              onChange={handleChange('newPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword('showNewPassword')}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showNewPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={100}

            />
          </FormControl>

          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
            <InputLabel htmlFor="outlined-adornment-password">Confirm New Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showConfirmNewPassword ? 'text' : 'password'}
              value={values.ConfirmNewPassword}
              onChange={handleChange('ConfirmNewPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword('showConfirmNewPassword')}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showConfirmNewPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={155}

            />
          </FormControl>
          <ProfileButtonWrapper>
            <PasswordSaveButton onClick={() => setCollapsed(!collapsed)}
            disabled = {values.oldPassword=="" && values.newPassword=="" && values.confirmNewPassword==""}
            > Save </PasswordSaveButton>
          </ProfileButtonWrapper>
        </ProfileCard>
      </Collapse>
    </div>
    
  );

}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, null)(MyProfile);