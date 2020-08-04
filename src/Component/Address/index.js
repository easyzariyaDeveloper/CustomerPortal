import React, {useState, useRef, useEffect} from "react";
import { connect } from 'react-redux';
import MobilePageLayout from "../../Layout/MobileView";
import { withRouter } from "react-router";
import { AdderessCard, AddressCardWrapper } from "./style";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Map from "./Map";
import DoorstepPickup from "./DoorstepPickup";
import SelfDrop from "./SelfDrop";
import Skeleton from "@material-ui/lab/Skeleton";

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

function getPickUpLocation({setAddress, address, preSelectedAddress}){
  return <>
    <Map
      height='300px'
      width='100%'
      setAddress = {setAddress}
      preSelectedAddressId = {preSelectedAddress?.current}
      address = {address}
      center={{lat: address?.latitude, lng: address?.longitude}}
    />
    <DoorstepPickup
      address = {address}
      preSelectedAddressId = {preSelectedAddress?.current}
    />
  </>
}

function getSelfDropLocation(){
  return <>
    <Map
      height='300px'
      width='100%'
      selfDrop = {true}
    />
    <SelfDrop/>
  </>
}


function Address(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [address, setAddress] = useState({});
  const handleChange = (event, value) => setActiveTabIndex(value);
  const handleChangeIndex = index => { setActiveTabIndex(index) };
  const enableTabs = useRef(props?.location?.search.includes("selfDrop=true"));
  const preSelectedAddress = useRef(new URLSearchParams(window.location.search).get("addressId"));

  
  useEffect(() => {
    const addressObj = props?.customer?.addressList.find(({addressId}) => addressId === preSelectedAddress?.current);
    setAddress({
      ...addressObj,
      enableInputComponent: true
    });
  }, [props?.customer?.customerId, preSelectedAddress?.current])

  return <MobilePageLayout pageName = "Address" backButton = {true}>
    <AddressCardWrapper>
      {
         preSelectedAddress?.current && !props?.customer?.customerId
         ? <>
            <Skeleton animation="wave" height={350} width="100%" />
            <Skeleton animation="wave" height={200} width="90%" style = {{margin : "0 auto"}}/>
          </>
         : <AdderessCard>
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
               {getPickUpLocation({setAddress, address, preSelectedAddress})}
           </SwipeableViews> : getPickUpLocation({setAddress, address, preSelectedAddress})
         } 
        </AdderessCard>
      }
    </AddressCardWrapper>
  </MobilePageLayout>
}

const mapStateToProps = (state) => {
  return {
      customer: state?.profile
  }
};

export default withRouter(connect(mapStateToProps, null)(Address));