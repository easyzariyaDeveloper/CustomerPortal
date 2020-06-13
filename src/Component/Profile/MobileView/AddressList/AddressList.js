import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import TelegramIcon from '@material-ui/icons/Telegram';
import { AddressDiv, LabelDiv, LabelSpan } from './style';
import EditAndDelete from './EditAndDeletion';



const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#71DA9C'
  }
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    color: "black",
    opacity: "0.5",
    
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
  underTab: {
    backgroundColor: 'white',
    width: '90%',
    margin: '0',
    borderRadius: '5px'
  },
}));


export default function AddressList(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({ index: 0 });

  let apiAddress = "World Trade Center Near Orion Mall Bangalore"

  const[address,setAddress] = React.useState(apiAddress)

  const changeHandler = (newAddress) => {
    setAddress(newAddress);
  };

  const deleteHandler = () => {setAddress("")}

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

  return <div className={classes.underTab}>
    <div>
      <div>
        <AntTabs value={index} onChange={handleChange} centered style = {{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>

        <AntTab label={<LabelDiv>
            <HomeIcon />
            <LabelSpan>Home</LabelSpan>
        </LabelDiv>} />

        <AntTab label={<LabelDiv>
          <LocalMallIcon />
          <LabelSpan>Office</LabelSpan>
        </LabelDiv>} />

        <AntTab label={<LabelDiv>
          <TelegramIcon />
          <LabelSpan>Others</LabelSpan>
        </LabelDiv>} />

        </AntTabs>
      </div>

    <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>

      <div>
        <EditAndDelete  address = {address}
                        changeHandler = {changeHandler}    
                        deleteHandler = {deleteHandler}        
        />
        <br/>
        <AddressDiv>
          {address}
        </AddressDiv>
      </div>

      <div>
        <EditAndDelete  address = {address}
                        changeHandler = {changeHandler}    
                        deleteHandler = {deleteHandler}        
        />
        <br/>
        <AddressDiv>
          {address}
        </AddressDiv>
      </div>

      <div>
      <EditAndDelete  address = {address}
                        changeHandler = {changeHandler}    
                        deleteHandler = {deleteHandler}        
        />
        <br/>
        <AddressDiv>
          {address}
        </AddressDiv>
      </div>


    </SwipeableViews>
  </div>
  </div>
}




