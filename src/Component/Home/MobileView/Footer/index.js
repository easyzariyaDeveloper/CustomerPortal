import React, {useState} from "react";
import { HomeFooterWrapper,FooterLink, ContactInfoDiv, ContactIcon, FooterAddress, SocialDiv, SocialIcon, RightsDiv, LinkWrapperA, LinkWrapperB, BorderDiv } from "./style";
import Address from "../../Images/address.png"
import Phone from "../../Images/phone.png"
import Mail from "../../Images/mail.png"
import Linkedin from "../../Images/linkedin.png"
import Twitter from "../../Images/twitter.png"
import Facebook from "../../Images/facebook.png"
import Instagram from "../../Images/instagram.png"

export default function HomeFooter (props){

    return <HomeFooterWrapper>
        <LinkWrapperA>
            <FooterLink href = "/#">About Us</FooterLink>
            <FooterLink href = "/#">Privacy Policy</FooterLink>
            <FooterLink href = "/#">Franchise</FooterLink>
        </LinkWrapperA>
        <LinkWrapperB>
            <FooterLink href = "/#">Terms &amp; Conditions</FooterLink>
            <FooterLink href = "/#">Contact Us</FooterLink>
        </LinkWrapperB>

        <BorderDiv/>

        <ContactInfoDiv>
            <ContactIcon src = {Address}/>
            <FooterAddress>EzAutocare, Whitefield, Bengaluru</FooterAddress>
        </ContactInfoDiv>
        <ContactInfoDiv>
            <ContactIcon src = {Phone}/>
            <FooterAddress>(555) 765-4321</FooterAddress>
        </ContactInfoDiv>
        <ContactInfoDiv>
            <ContactIcon src = {Mail}/>
            <FooterAddress>Info@ez.com</FooterAddress>
        </ContactInfoDiv>

        <BorderDiv/>

        <SocialDiv>
            <SocialIcon src = {Facebook}/>
            <SocialIcon src = {Instagram}/>
            <SocialIcon src = {Twitter}/>
            <SocialIcon src = {Linkedin}/>
        </SocialDiv>

        <RightsDiv>
            © {new Date().getFullYear()} Company - All rights reserved
        </RightsDiv>
    </HomeFooterWrapper>
}