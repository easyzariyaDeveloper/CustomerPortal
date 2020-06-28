import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {TabDiv, ServiceCard, ServiceImage, Label, ServiceCardWrapper, ServiceLink} from './styles';
import {Mfont_color} from "../../../../Assets/style-var";
import DefaultImage from "../../../../Assets/img/General.png";


//https://react-swipeable-views.com/demos/demos/

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
            {tabs.map(({label, id}) => <AntTab label= {label} key = {id}/>)}
          </AntTabs>
        </TabDiv>
        
        <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
          {
            tabs.map(({id}) => {
              return <div style={{padding: "30px 20px"}}>
                <ServiceCardWrapper>
                  {
                    props["cardInfo"][id].map(({label, images, id}) => {
                      return <ServiceCard>
                        <ServiceLink href = {`/service/${tabs[index]["id"]}/${id}`}>
                          <ServiceImage src = {images.length > 0 ? images[0] : DefaultImage} />
                          <Label>{label}</Label>
                        </ServiceLink> 
                      </ServiceCard>
                    })
                  }
                </ServiceCardWrapper>
              </div>
            })
          }
        </SwipeableViews>
      </div>
    );
  }



