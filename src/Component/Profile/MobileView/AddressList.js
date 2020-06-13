import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import TelegramIcon from '@material-ui/icons/Telegram';

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#71DA9C'
  }
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    color: "black",
    opacity: "0.5",
    //minWidth: 72,
    // width: "fit-content",
    // width: 'calc(100% / 2)',
    // maxWidth: 'inherit',
    '&:hover': {
      color: 'black',
      opacity: 1,
    },
    '&$selected': {
      color: 'black',
      fontWeight: 'normal'
    },
    '&:focus': {
      color: 'black',
    },
  },
  selected: {},
}))((props) => <Tab centered disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  demo2: {
    backgroundColor: '#2e1534',
    width: '90%',
    margin: '0'
  },
}));


export default function AddressList(props) {
  const classes = useStyles();
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

  return <div className={classes.demo2}>
    <div>
      <div>
        <AntTabs value={index} onChange={handleChange} centered>

        <AntTab label={<div style={{ display: "flex", flexDirection: "initial" }}>
          <HomeIcon />
          <span style={{ paddingLeft: "5px" }}>Home</span>

        </div>} />
        <AntTab label={<div style={{ display: "flex", flexDirection: "initial" }}>
          <LocalMallIcon />
          <span style={{ paddingLeft: "5px" }}>Office</span>

        </div>} />
        <AntTab label={<div style={{ display: "flex", flexDirection: "initial" }}>
          <TelegramIcon />
          <span style={{ paddingLeft: "5px" }}>Others</span>

        </div>} />
        </AntTabs>
      </div>

    <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>

      <div>
        slide1
      </div>

      <div>
        slide2
      </div>

      <div>
        slide3
      </div>


    </SwipeableViews>
  </div>
  </div>
}




