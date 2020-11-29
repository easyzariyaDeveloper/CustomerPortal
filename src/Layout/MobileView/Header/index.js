import React, { useState } from "react";
import { HeaderWrapper, Hamburger, PageName, Link, BackButton, CartWrapper, ItemCount } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  brand: {
    display: "flex",
    margin: "10px",
    justifyContent: "space-around",
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
    color: `${anchor_link_color}`,
    fontSize: `${EZFontMediumSize}`
  }
});

export default function Header(props) {
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
    { text: "Home", to: "/" },
    { text: "Services", to: "/services" },
  ];

  if(userId){
    links.push(
      { text: "Profile", to: "/profile" },
      { text: "My Cars", to: "/profile/cars" },
      { text: "Address List", to: "/profile/address" },
      { text: "Service History", to: "/profile/orders" },
      { text: "Logout", to: "/login" }
    );
  } else {
    links.push({ text: "Login", to: "/login" },)
  }
  return (
    <>
      <HeaderWrapper noborder = {props.noborder}>
        { props.backButton ? <BackButton onClick={() => history?.go(-1)}>
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
            EasyZariya
            <Avatar alt="Image" />
          </Box>
          <Divider />
          <List className={classes.links}>
            {links.map((link, key) => (
              <ListItem className={classes.listItem} key={key}>
                {
                  link.text === "Logout" ?  
                  <ListItemText
                    onClick = {() => {
                      /**
                       * Later move to method
                       */
                      props?.logout()
                    }}
                  > {link.text} </ListItemText>
                  : <ListItemText primary={
                    <Link to={link.to} className = {classes.link}>{link.text}</Link>
                  } />
                }
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}
