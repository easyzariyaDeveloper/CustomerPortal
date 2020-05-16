import React, { useState } from "react";
import { TabWrapper,MAppBar} from "./styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
  })(Tabs);
  
  const AntTab = withStyles((theme) => ({
    root: {
        // maxWidth:120,
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      color: 'white',
      fontSize: '16px',
      '&:selected': {
        color: '#1890ff',
      },
      '&:focus': {
        color: 'black',
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);

  const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    demo1: {
      backgroundColor: '#56CCF2',
    }
  }));

export default function ScrollTab(props) {
    if (!props["tabs"] || !Array.isArray(props["tabs"]) || Array.isArray(props["tabs"]) && props["tabs"].length <= 0) {
        return "";
    }
    const { tabs = [] } = props;
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={classes.demo1}>
        <AntTabs variant="scrollable"  value={activeTab} onChange={(e, index) => setActiveTab(tabs[index])} >
            {tabs.map(({ label, id }, index) => {
                return <AntTab
                    onClick={() => setActiveTab(tabs[index])}
                    //active={activeTab.id === id}
                    label = {label}
                >        
                </AntTab>
            })
            }
        </AntTabs>
        </div> 
        {activeTab.MComponent ? <activeTab.MComponent activeId={activeTab.id} /> : null}
    </div>
}
  
  

  