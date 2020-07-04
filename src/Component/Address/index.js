import React, {useState, useRef} from "react";
import MobilePageLayout from "../../Layout/MobileView";
import { withRouter } from "react-router";
import { AdderessCard, AddressCardWrapper } from "./style";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Map from "./Map";

/*For Tabs*/
const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#71DA9C'
  }
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    color: "black",
    minWidth: 72,
    width: '50%',
    opacity: 0.5,
    fontWeight: 'bold',

    '&:hover': {
      color: 'black',
      opacity: 1,
    },
    '&$selected': {
      color: 'black',
      fontWeight: 'bold'
    },
    '&:focus': {
      color: 'black',
    },
  },
  selected: {},
}))((props) => <Tab centered disableRipple {...props} />);

function getPickUpLocation(){
  return <>
    <Map
    //google={props.google}
      height='300px'
      width='95%'
    />

    
  </>
}

function getSelfDropLocation(){
  return <>
    <Map
    //google={props.google}
    height='300px'
    width='95%'
    />
  </>
}


function Address(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleChange = (event, value) => setActiveTabIndex(value);
  const handleChangeIndex = index => { setActiveTabIndex(index) };
  const enableTabs = useRef(false);

  return <MobilePageLayout>
    <AddressCardWrapper>
      <AdderessCard>
        {
          enableTabs?.current ? 
          <>
          <AntTabs value={activeTabIndex} onChange={handleChange} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            <AntTab label="Self Drop" />
            <AntTab label="Doorstep Pickup" />
          </AntTabs>
          </> : null
        }
        {
          enableTabs?.current ? 
          <SwipeableViews index={activeTabIndex} onChangeIndex={handleChangeIndex} slideStyle={{ position: "relative" }}>
              {getSelfDropLocation()}
              {getPickUpLocation()}
          </SwipeableViews> : getPickUpLocation()
        } 
      </AdderessCard>
    </AddressCardWrapper>
  </MobilePageLayout>
}



export default withRouter(Address);