import React, { useRef, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {Mfont_color, ez_button_color} from "../../../../Assets/style-var";
import Signup from '../TextComponent/Signup';
import Login from '../TextComponent/Login';
import { TermsPara,SignupLogInButton, RedirectButton } from './style';
import { withRouter } from 'react-router-dom';
import { loginUserByCredential, createSignup} from '../../Data/action';
import { connect } from 'react-redux';
import { isValidUserDetail, isValidPassword, isValidEmail, isValidContactNumber, isPasswordMatching, isValidEmailOrPhone } from '../../utils';
import { SocialButtonDiv,FbLoginButton, GoogleLoginButton, MAccountWrapper, MAccountCard } from '../style';
import Google from "../../../../Assets/img/google.jpg";
import FacebookIcon from '@material-ui/icons/Facebook';
import ResetPassword from './ResetPassword';
import { createOtp } from '../../../OtpPage/Data/action';



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
  const [loginError, setLoginError] = useState({});
  const handleChange = (event, value) => setActiveTabIndex({index: value});
  const handleChangeIndex = index => setActiveTabIndex({index: index});
  const userDetail = useRef({});
  const [checked, setChecked] = useState(true);

  const [resetEnabled, setResetEnabled] = useState(false)
  
  function fetchAndSetUserDetail(key, value){
    userDetail.current[key] = value;
  }

  function loginUser(){
    const loginError = {};

    if(!isValidUserDetail(userDetail?.current?.user)){
        loginError["user"] = "Invalid User";
    }
      
    if (!isValidPassword(userDetail?.current?.password)){
      loginError["password"] = "Invalid Password";
    }
    setLoginError(loginError);

    if(Object.keys(loginError).length == 0){
      const {search = ""} = location;
      props.loginUser(userDetail, search);
    }

    // const validCredentials = isValidUserDetail(userDetail.current.user) && isValidPassword(userDetail.current.password);
    // if (validCredentials){
    //   props.loginUser(userDetail);
    // }
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
        <MAccountWrapper>
          <MAccountCard>
        <div>
          <AntTabs value={activeTabIndex?.index} onChange={handleChange}>
            <AntTab label= "Sign in"/>
            <AntTab label= "Sign up"/>
          </AntTabs>
        </div>

        <SwipeableViews index={activeTabIndex?.index} onChangeIndex={handleChangeIndex}> 
          <div>
            <Login 
              updateValue = {fetchAndSetUserDetail}
              loginErrorObj = {loginError}
            />  

            <RedirectButton onClick = {()=> {
              setResetEnabled(!resetEnabled)
            }}>Forgot Password?</RedirectButton>

            {/* <div style= {{display:"flex", justifyContent: "space-around", margin: "25px 0"}}>

            <a style= {{textDecoration:"none", color: ez_button_color}}href = "#">Forgot Password?</a>
            </div> */}


            <div style= {{textAlign:"center", margin: "40px 0"}}>
              <SignupLogInButton onClick = {() => loginUser()}>Login</SignupLogInButton>
              <p style= {{fontWeight: "300", fontSize: "15px"}}>Or Sign In with</p>
            </div>

          <SocialButtonDiv>
            <FbLoginButton><FacebookIcon style={{ verticalAlign: "middle", paddingRight: "10px", fontSize: "30px", paddingBottom: "2px" }} />
                            Facebook
                        </FbLoginButton>
            <GoogleLoginButton><img style={{ verticalAlign: "sub", paddingRight: "10px" }} src={Google} />
                            Google
                        </GoogleLoginButton>
          </SocialButtonDiv>
          </div>

          
          <div>
            <Signup 
              updateValue = {fetchAndSetUserDetail} 
              errorObj = {error}
            />
            <div style= {{textAlign:"center"}}>
            <TermsPara>By Signing Up you agree to our &nbsp;<a href="#">terms and conditions</a></TermsPara>
              <SignupLogInButton onClick = {() => {signUpUser()}}>Sign Up</SignupLogInButton>
              <p style= {{fontWeight: "300", fontSize: "15px"}}>Or Sign Up with</p>
            </div>
          <SocialButtonDiv>
            <FbLoginButton><FacebookIcon style={{ verticalAlign: "middle", paddingRight: "10px", fontSize: "30px", paddingBottom: "2px" }} />
                            Facebook
                        </FbLoginButton>
            <GoogleLoginButton><img style={{ verticalAlign: "sub", paddingRight: "10px" }} src={Google} />
                            Google
                        </GoogleLoginButton>
          </SocialButtonDiv>
          </div>
      </SwipeableViews>
      </MAccountCard>

      {resetEnabled ? <ResetPassword setVisibility = {setResetEnabled}
        generateOtp = {props.createOtp}
      /> : null}

      </MAccountWrapper>
    </div>
)};

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userDetail, search) => {dispatch(loginUserByCredential(userDetail?.current, search))},
    signUpUser: (signupDetails) => {dispatch(createSignup(signupDetails?.current))},
    createOtp : (customerId= "") => {dispatch(createOtp(customerId))}

  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MSignUpTab));


