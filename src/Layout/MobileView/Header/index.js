import React, { useState } from "react";
import { HeaderWrapper, Hamburger, PageName, Link, BackButton, CartWrapper, ItemCount } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {
  Box,
  List,
  Divider,
  Avatar,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { readCookie, eraseCookie } from "../../../util";
import { border_color, anchor_link_color, EZFontMediumSize } from "../../../Assets/style-var";
import home from '../../../Assets/img/home.svg'
import service from '../../../Assets/img/service.svg'
import location from '../../../Assets/img/location.svg'
import profile from '../../../Assets/img/profile.svg'
import logout from '../../../Assets/img/logout.svg'
import car from '../../../Assets/img/car.svg'
import history from '../../../Assets/img/history.svg'
import { withRouter } from "react-router-dom";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  brand: {
    display: "grid",
    margin: "10px",
    gridTemplateColumns: '1fr 3fr 1fr',
    alignItems: "center",
    height: "55px",
  },
  listItem: {
    borderBottom: `1px solid  ${border_color}`
  },
  link: {
    padding: "20px",
    width: "100%",
    display: "inline-block",
    margin: "0",
    padding: "0 10px",
    color: '#138A9A',
    fontSize: `${EZFontMediumSize}`
  },

  ezText: {
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '28px',
    color: '#138A9A'
  }
});

function Header(props) {
  const classes = useStyles();
  const [slideMenu, setSlideMenu] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSlideMenu(open);
  };

  const userId = readCookie("userUUId");
  const links = [
    { text: "Home", to: "/" , image: `${home}`},
    { text: "Services", to: "/services" ,image: `${service}`},
  ];

  if(userId){
    links.push(
      { text: "Profile", to: "/profile", image: `${profile}`},
      { text: "My Cars", to: "/profile/cars", image: `${car}` },
      { text: "Address List", to: "/profile/address", image: `${location}` },
      { text: "Service History", to: "/profile/orders", image: `${history}` },
      { text: "Logout", to: "/login", image: `${logout}` }
    );
  } else {
    links.push({ text: "Login", to: "/login" , image: `${logout}`},)
  }
  return (
    <>
      <HeaderWrapper noborder = {props.noborder}>
        { props.backButton ? <BackButton onClick={() => props?.history?.goBack()}>
          <svg viewBox="0 0 24 24" style = {{"width": "20px"}}>
            <path fill="#FFFFFF" fillrule="evenodd" d="M20.25 11.25H5.555l6.977-6.976a.748.748 0 000-1.056.749.749 0 00-1.056 0L3.262 11.43A.745.745 0 003 12a.745.745 0 00.262.57l8.214 8.212a.75.75 0 001.056 0 .748.748 0 000-1.056L5.555 12.75H20.25a.75.75 0 000-1.5"></path>
          </svg>
        </BackButton> : <Hamburger onClick={toggleDrawer(true)}>&#x2630;</Hamburger> }
        <PageName>{props["pageName"]}</PageName>
        <CartWrapper href = "/cart">
          <ShoppingCartIcon style={{fontSize:"22px"}}/>
          {
            (props?.cart?.items || []).length > 0 && 
            <ItemCount>
              {
                props.cart.items.reduce((accumlator, item) => { 
                  accumlator += item["quantity"];
                  return accumlator;
                }, 0)
              }
            </ItemCount>
          }
        </CartWrapper>
      </HeaderWrapper>
      
      {/* <MenuWrapper active = {slideMenu}>
            <Close onClick = {toggleMenu}>&#x02DF;</Close>
        </MenuWrapper>
        <Overlay onClick = {toggleMenu} active = {slideMenu} />  */}
      <SwipeableDrawer
        anchor={"left"}
        open={slideMenu}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box className={classes.brand}>
            <span className = {classes.ezText}>EZ</span>
            <span style = {{
              background: '-webkit-linear-gradient(#00C37D, #138A9A)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent'
            }}
            >EasyZariya</span>
            <Avatar alt="Image" />
          </Box>
          <Divider />
          <List className={classes.links}>
            {links.map((link, key) => (
              <ListItem className={classes.listItem} key={key}>
                {
                  link.text === "Logout" ?<>
                  <ListItemIcon style = {{minWidth: '25px'}}><img src = {link.image} /></ListItemIcon>
                  <ListItemText
                    onClick = {() => {
                      /**
                       * Later move to method
                       */
                      props?.logout()
                    }}
                    className = {classes.link}
                  > {link.text} </ListItemText></>
                  : <><ListItemIcon style = {{minWidth: '25px'}}><img src = {link.image} /></ListItemIcon>
                  <ListItemText primary={
                    <Link to={link.to} className = {classes.link}>{link.text}</Link>
                  } /></>
                }
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default withRouter(Header)
