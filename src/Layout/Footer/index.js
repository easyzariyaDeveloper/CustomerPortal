import React from "react";
// import { Link } from "react-router-dom";
import {
  FooterWrapper,
  FooterSection,
  SubFooter,
  AboutCompany,
  QuickLinks,
  ContactBox,
  AboutCompanyText,
  Logo,
  CompanyConnect,
  ConnectIconFb,
  ConnectIconIn,
  ConnectIconTw,
  ConnectIconYt,
  QuickLinkHeader,
  QuickLinksRow,
  QuickLinksSection,
  ContactBoxHeader,
  ContactColumn,
  ContactInfo,
  ContactIcon,
  ContactHead,
  Link,
  TagLine,
  SubFooterRight,
} from "./styles";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterSection>
        <AboutCompany>
          {" "}
          <Logo>EASY ZARIYA</Logo>
          <AboutCompanyText>
            This is a blurb about the company sed do ejusmud tempor incidente ut
            laborde et dolor ex magna alique
          </AboutCompanyText>
          <CompanyConnect>
            <ConnectIconFb />
            <ConnectIconTw />
            <ConnectIconIn />
            <ConnectIconYt />
          </CompanyConnect>
        </AboutCompany>
        <QuickLinks>
          <QuickLinkHeader>Quick Links</QuickLinkHeader>
          <QuickLinksSection>
            <QuickLinksRow>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/franchise">Franchise</Link>
              <Link to="/">Download App</Link>
            </QuickLinksRow>
            <QuickLinksRow>
              <Link to="/">Reviews</Link>
              <Link to="/">Shop</Link>
              <Link to="/">Careers</Link>
              <Link to="/">FAQs</Link>
            </QuickLinksRow>
          </QuickLinksSection>
        </QuickLinks>
        <ContactBox>
          <ContactBoxHeader>Contact</ContactBoxHeader>
          <ContactColumn>
            {" "}
            <ContactHead>
              <ContactIcon>ad</ContactIcon>
              <ContactInfo>
                321 Pikes Place Parkaway Seattle, WA 54321
              </ContactInfo>
            </ContactHead>
            <ContactHead>
              <ContactIcon>ph</ContactIcon>
              <ContactInfo>(555) 765-4321</ContactInfo>
            </ContactHead>
            <ContactHead>
              <ContactIcon>em</ContactIcon>
              <ContactInfo>Info@company.com</ContactInfo>
            </ContactHead>
            <ContactHead>
              <ContactIcon>em</ContactIcon>
              <ContactInfo>Mon - Sat: 7:00am - 6:00pm</ContactInfo>
            </ContactHead>
          </ContactColumn>
        </ContactBox>
      </FooterSection>
      <SubFooter>
        <TagLine>
          TagLine Lorem epsum dolor sit amet, consectetur adipiscing eiusmud{" "}
        </TagLine>
        <SubFooterRight>
          2018 Copyright. <Link to="/">Privacy Policy</Link> |{" "}
          <Link to="/">Terms and Conditions</Link>
        </SubFooterRight>
      </SubFooter>
    </FooterWrapper>
  );
}
