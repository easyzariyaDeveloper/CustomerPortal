import React, { useRef, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {Mfont_color, ez_button_color} from "../../../../Assets/style-var";
import Signup from '../TextComponent/Signup';
import Login from '../TextComponent/Login';
import { TermsPara,SignupLogInButton } from './style';
import { withRouter } from 'react-router-dom';
import { loginUserByCredential, createSignup } from '../../Data/action';
import { connect } from 'react-redux';
import { isValidUserDetail, isValidPassword, isValidEmail, isValidContactNumber, isPasswordMatching } from '../../utils';


//https://react-swipeable-views.com/demos/demos/

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#71DA9C'
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    minWidth: 72,
    width: '50%',
    // width: 'calc(100% / 2)',
    // maxWidth: 'inherit',
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: Mfont_color,
      fontWeight:'bold'
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function MSignUpTab(props) {
  const [activeTabIndex, setActiveTabIndex] = useState({index: props?.location?.pathname.toLowerCase().includes("signup") ? 1 : 0});
  const [error, setError] = useState({});
  const handleChange = (event, value) => setActiveTabIndex({index: value});
  const handleChangeIndex = index => setActiveTabIndex({index: index});
  const userDetail = useRef({});
  
  function fetchAndSetUserDetail(key, value){
    userDetail.current[key] = value;
  }

  function loginUser(){
    const validCredentials = isValidUserDetail(userDetail.current.user) && isValidPassword(userDetail.current.password);
    if (validCredentials){
      props.loginUser(userDetail);
    }
  }

  function signUpUser(){
    const error = {};

    if(!isValidEmail(userDetail?.current?.email)){
      error["email"] = "Invalid Email";
    }
    if(!userDetail?.current?.name){
      error["name"] = "Invalid user name";
    }
    if(!isValidContactNumber(userDetail?.current?.phone)){
      error["phone"] = "Invalid Contact Number. Should be 10 digits.";
    }
    if(!isValidPassword(userDetail?.current?.password)){
      error["password"] = "Invalid Password";
    } else if (!isPasswordMatching(userDetail?.current?.password,  userDetail?.current?.confirmPassword)){
      error["confirmPassword"] = "Password & Confirm password doesn't match";
    }
    setError(error);
    if(Object.keys(error).length == 0){
      props.signUpUser(userDetail);
    }
  }

  return (
      <div>
        <div>
          <AntTabs value={activeTabIndex?.index} onChange={handleChange}>
            <AntTab label= "Sign in"/>
            <AntTab label= "Sign up"/>
          </AntTabs>
        </div>

        <SwipeableViews index={activeTabIndex?.index} onChangeIndex={handleChangeIndex}> 
          <div>
            <Login updateValue = {fetchAndSetUserDetail} />  
            <div style= {{display:"flex", justifyContent: "space-around", margin: "25px 0"}}>
            <a style= {{textDecoration:"none", color: ez_button_color}}href = "#">Forgot Password?</a>
            </div>
            <div style= {{textAlign:"center", margin: "40px 0"}}>
              <SignupLogInButton onClick = {loginUser}>Login</SignupLogInButton>
              <p style= {{fontWeight: "300", fontSize: "15px"}}>Or Sign In with</p>
            </div>
          </div>

          
          <div>
            <Signup 
              updateValue = {fetchAndSetUserDetail} 
              errorObj = {error}
            />
            <div style= {{textAlign:"center"}}>
            <TermsPara>By Signing Up you agree to our &nbsp;<a href="#">terms and conditions</a></TermsPara>
              <SignupLogInButton onClick = {() => signUpUser()}>Sign Up</SignupLogInButton>
              <p style= {{fontWeight: "300", fontSize: "15px"}}>Or Sign Up with</p>
            </div>
          </div>
      </SwipeableViews>

    </div>
)};

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userDetail) => {dispatch(loginUserByCredential(userDetail?.current))},
    signUpUser: (signupDetails) => {dispatch(createSignup(signupDetails?.current))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MSignUpTab));


