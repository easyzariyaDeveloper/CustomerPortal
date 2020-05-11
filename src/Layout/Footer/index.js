import React from "react";
// import { Link } from "react-router-dom";
import {
  FooterWrapper,
  FooterSection,
  SubFooter,
  Link,
  TagLine,
  SubFooterRight,
  FooterContainer,
} from "./styles";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StayCurrentPortraitIcon from "@material-ui/icons/StayCurrentPortrait";
import EmailIcon from "@material-ui/icons/Email";
import TimerIcon from "@material-ui/icons/Timer";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
export default function Footer() {
  const contacts = [
    { img: LocationOnIcon, text: "321 Pikes Place Parkaway Seattle, WA 54321" },
    { img: StayCurrentPortraitIcon, text: "(555) 765-4321" },
    { img: EmailIcon, text: "Info@company.com" },
    { img: TimerIcon, text: "Mon - Sat: 7:00am - 6:00pm" },
  ];
  const rows = [
    [
      { to: "/about", text: "about" },
      { to: "/services", text: "services" },
      { to: "/franchise", text: "franchise" },
      { to: "/downloadapp", text: "Download App" },
    ],
    [
      { to: "/reviews", text: "reviews" },
      { to: "/shop", text: "shop" },
      { to: "/careers", text: "careers" },
      { to: "/faqs", text: "faqs" },
    ],
  ];
  const logo = "";
  const icons = [
    { img: FacebookIcon, to: "#" },
    { img: TwitterIcon, to: "#" },
    { img: InstagramIcon, to: "#" },
    { img: YouTubeIcon, to: "#" },
  ];
  const blurb_text =
    "This is a blurb about the company sed do ejusmud tempor incidente ut laborde et dolor ex magna alique";
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSection>
          <Left logo={logo} icons={icons} blurb_text={blurb_text} />
          <Middle rows_link={rows} />
          <Right contacts={contacts} />
        </FooterSection>
      </FooterWrapper>
      <SubFooter>
        <TagLine>
          TagLine Lorem epsum dolor sit amet, consectetur adipiscing eiusmud{" "}
        </TagLine>
        <SubFooterRight>
          2018 Copyright. <Link to="/">Privacy Policy</Link> |{" "}
          <Link to="/">Terms and Conditions</Link>
        </SubFooterRight>
      </SubFooter>
    </FooterContainer>
  );
}
