import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import MyProfile from '../MyProfile';
import MyCars from '../MyCars';
import AddressList from '../AddressList';




//https://react-swipeable-views.com/demos/demos/

const AntTabs = withStyles({
  indicator: {
    backgroundColor: 'white'
  }
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    color: "white",
    // minWidth: 72,
    // width: "fit-content",
    // width: 'calc(100% / 2)',
    // maxWidth: 'inherit',
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: 'white',
      fontWeight:'normal'
    },
    '&:focus': {
      color: 'white',
    },
  },
  selected: {},
}))((props) => <Tab centered disableRipple {...props} />);



export default function ProfileTab(props) {
  const [state,setState] = React.useState({index:0});


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
            <AntTab label ="My Profile"/>
            <AntTab label= "My Cars"/>
            <AntTab label= "Address List"/>
            <AntTab label= "Order History"/>
          </AntTabs>
        </div>
        
        <SwipeableViews index={index} onChangeIndex={handleChangeIndex} slideStyle = {{position: "relative"}}>

          <div>
            <MyProfile/>
          </div>

          <div>
            <MyCars/>
          </div>

          <div style= {{position: "absolute", left: "20px", right: "20px", top: "20px", width: "100%"}}>
            <AddressList/>
          </div>

          <div>
            slide 4
          </div>

        </SwipeableViews>
      </div>
     
    );
  }



