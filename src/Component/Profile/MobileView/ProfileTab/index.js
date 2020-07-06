import React, {useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import MyProfile from '../MyProfile';
import MyCars from '../MyCars';
import AddressList from '../AddressList/AddressList';
import { ProfileTabWrapper } from '../style';
import {URLToIndexMap} from "./config";
import { withRouter } from 'react-router-dom';
import { EZFontMediumSize } from '../../../../Assets/style-var';



//https://react-swipeable-views.com/demos/demos/

const AntTabs = withStyles({
  indicator: {
    backgroundColor: 'white'
  }
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    color: "white",
    // padding: '0 20px',
    fontSize: `${EZFontMediumSize}`,
    
    '&:first-child': {
      paddingLeft: '20px'
    },

    '&:last-child': {
      paddingRight: '20px'
    },

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



function ProfileTab(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(URLToIndexMap[props?.match?.params?.type?.toLowerCase()] || 0);
  const handleChange = (event, index) => setActiveTabIndex(index);
  const handleChangeIndex = index => setActiveTabIndex(index);

  return (
    <>
      <ProfileTabWrapper>
        <AntTabs value={activeTabIndex} onChange={handleChange}>
          <AntTab label ="My Profile"/>
          <AntTab label= "My Cars"/>
          <AntTab label= "Address List"/>
          <AntTab label= "Order History"/>
        </AntTabs>
      </ProfileTabWrapper>
      
      <SwipeableViews index={activeTabIndex} onChangeIndex={handleChangeIndex} slideStyle = {{position: "relative"}}>
        <MyProfile/>
        <MyCars/>
        <AddressList />
        <div>
          slide 4
        </div>
      </SwipeableViews>
    </>
  );
}

export default withRouter(ProfileTab);



