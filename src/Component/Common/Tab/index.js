import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {TabDiv, ServiceCard, ServiceImage, LabelLink, ServiceCardWrapper} from './styles';
import {Mfont_color} from "../../../Assets/style-var";


//https://react-swipeable-views.com/demos/demos/

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#1890ff',
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

export default function ScrollTab(props) {
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
  const {tabs =[]} = props;
  const { index } = state;
  
    return (
      <div>
        <TabDiv>
          <AntTabs value={index} onChange={handleChange}>
            {tabs.map(tab => <AntTab label= {tab} />)}
          </AntTabs>
        </TabDiv>
        
        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
          <div style={{padding: "30px 20px"}}>
          <ServiceCardWrapper>
            {props["cardInfo"].map(({label, ServiceImg}) => {
              return <ServiceCard>
                  <ServiceImage src = {ServiceImg} />
                  <LabelLink href = "#">{label}</LabelLink> 
                </ServiceCard>
              
            })
            }
            </ServiceCardWrapper>
          </div>
          <div>slide n°2</div>
        </SwipeableViews>
      </div>
    );
  }



