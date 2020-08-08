import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {ServiceTabs} from '../../SelectService/mockServiceData';
import {TabDiv} from "../../SelectService/MobileView/MTab/styles" 
import { Mfont_color } from "../../../Assets/style-var";
import { connect } from "react-redux";
import DoorstepAddress from "./doorstepAddress";


const AntTabs = withStyles((theme) => ({
    root:{
        width: "100vw"
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
  }))((props) => <Tabs disableRipple {...props} />)
  
  
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


function CheckOutCart(){
const [state,setState] = React.useState({index:0})


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
 

    return (<MobilePageLayout>
        <TabDiv>
          <AntTabs value={index} onChange={handleChange}>
            {ServiceTabs.map(({label, id}) => <AntTab label= {label} key = {id}/>)}
          </AntTabs>
        </TabDiv>
        
        <SwipeableViews index={index} onChangeIndex={handleChangeIndex} style = {{minHeight: "80vh"}}>
          <div>jjfhj</div>
          <div>
              <DoorstepAddress/>
          </div>
        </SwipeableViews>
      </MobilePageLayout>
    );
    

}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //fetchCart: () => {dispatch(fetchCart())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutCart);