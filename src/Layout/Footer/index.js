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
import Left from "./Left/index";
import Middle from "./Middle/index";
import Right from "./Right/index";
export default function Footer() {
  const contacts = [
    { img: "", text: "321 Pikes Place Parkaway Seattle, WA 54321" },
    { img: "", text: "(555) 765-4321" },
    { img: "", text: "Info@company.com" },
    { img: "", text: "Mon - Sat: 7:00am - 6:00pm" },
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
  const icons = [{ img: "" }, { img: "" }, { img: "" }, { img: "" }];
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
