import React from "react";
import MobilePageLayout from "../../../../Layout/MobileView";
import { withRouter } from "react-router";
import { AdderessCard, AddressCardWrapper, Tagdiv } from "./style";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Map from "../Map";
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import TelegramIcon from '@material-ui/icons/Telegram';
import AddressInputText from "./AddressInputText";


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



function Address(props) {
  const [state, setState] = React.useState({ index: 0 });


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

  return <MobilePageLayout>
    <AddressCardWrapper>
      <AdderessCard>
        <div>
          <AntTabs value={index} onChange={handleChange} style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            <AntTab label="Self Drop" />
            <AntTab label="Doorstep Pickup" />
          </AntTabs>
        </div>

        <SwipeableViews index={index} onChangeIndex={handleChangeIndex} slideStyle={{ position: "relative" }}>

          <div>
            <Map
              //google={props.google}
              center={{ lat: 12.9716, lng: 77.5946 }}
              height='300px'
              width='95%'
              zoom={15}
            />
          </div>

          <div>
          <Tagdiv>
              <div>
                <HomeIcon color="disabled" style={{ cursor: "pointer" }} /> Home
            </div>
              <div>
                <LocalMallIcon color="disabled" style={{ cursor: "pointer" }} /> Office
            </div>
              <div>
                <TelegramIcon color="disabled" style={{ cursor: "pointer" }} /> Others
            </div>
            </Tagdiv>
            <Map
              //google={props.google}
              center={{ lat: 12.9716, lng: 77.5946 }}
              height='300px'
              width='95%'
              zoom={15}
            />
            <div style={{marginTop:"80px"}}>
              <AddressInputText/>
            </div>
          </div>

        </SwipeableViews>
      </AdderessCard>
    </AddressCardWrapper>
  </MobilePageLayout>
}



export default withRouter(Address);