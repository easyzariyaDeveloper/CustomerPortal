import React, { useState } from "react";
import { HeaderWrapper, Hamburger, PageName, Link } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {
  Box,
  List,
  Divider,
  Avatar,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { readCookie } from "../../../util";
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
    paddingLeft: "40px",
  },
  links: {
    marginTop: "30px",
  },
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
      { text: "Logout", to: "/" }
    );
  } else {
    links.push({ text: "Login", to: "/login" },)
  }
  return (
    <>
      <HeaderWrapper noborder = {props.noborder}>
        <Hamburger onClick={toggleDrawer(true)}>&#x2630;</Hamburger>
        <PageName>{props["pageName"]}</PageName>
      </HeaderWrapper>
      {/* <MenuWrapper active = {slideMenu}>
            <Close onClick = {toggleMenu}>&#x02DF;</Close>
        </MenuWrapper>
        <Overlay onClick = {toggleMenu} active = {slideMenu} />  */}
      <SwipeableDrawer
        anchor={"right"}
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
            EasyZaria
            <Avatar alt="Image" />
          </Box>
          <Divider />
          <List className={classes.links}>
            {links.map((link, key) => (
              <ListItem className={classes.listItem} key={key}>
                <ListItemText primary={<Link to={link.to}>{link.text}</Link>} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}
