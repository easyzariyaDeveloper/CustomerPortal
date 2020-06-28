import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {Mfont_color, ez_button_color} from "../../../../Assets/style-var";
import Signup from '../TextComponent/Signup';
import Login from '../TextComponent/Login';
import { TermsPara,SignupLogInButton } from './style';


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

export default function MSignUpTab(props) {
  const [state,setState] = React.useState({index:0});

  const [check, setCheck] = React.useState(true);

const handleChange = (event, value) => {
    setState({
      index: value,
    });
  };

  const handleChangeIndex = index => {
    setState({
      index,
    });
  };
  
  const { index } = state;
  
    return (
      <div>
        <div>
          <AntTabs value={index} onChange={handleChange}>
            <AntTab label= "Sign up"/>
            <AntTab label= "Login"/>
          </AntTabs>
        </div>
        
        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>

          <div>
            <Signup/>

            <div style= {{textAlign:"center"}}>
            <TermsPara>By Signing Up you agree to our &nbsp;<a href="#">terms and conditions</a></TermsPara>
              <SignupLogInButton>Sign Up</SignupLogInButton>
              <p style= {{fontWeight: "300", fontSize: "15px"}}>Or Sign Up with</p>
            </div>
          </div>

          

          <div>
            <Login/>  

            <div style= {{display:"flex", justifyContent: "space-around", margin: "25px 0"}}>
              <div>
              <input
              name="Remember me"
              type="checkbox"
              checked={check}
              onChange={(e) => setCheck(!check)} 
              />
              <label>Remember Me</label>
              </div>
              <a style= {{textDecoration:"none", color: ez_button_color}}href = "#">Forgot Password?</a>
            </div>

            <div style= {{textAlign:"center", margin: "40px 0"}}>
              <SignupLogInButton>Login</SignupLogInButton>
              <p style= {{fontWeight: "300", fontSize: "15px"}}>Or Sign In with</p>
            </div>
          </div>

        </SwipeableViews>
        </div>
     
    );
  }



