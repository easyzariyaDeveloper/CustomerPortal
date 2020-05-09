import React, { useState } from "react";
import { HeaderWrapper, MenuWrapper, Hamburger, Overlay, Close, PageName } from "./styles";

export default function Header(props){
    const [slideMenu, setSlideMenu] = useState(false);
    const toggleMenu = () => setSlideMenu(!slideMenu);
    return <>
        <HeaderWrapper>
            <Hamburger onClick = {toggleMenu}>
                &#x2630;
            </Hamburger>
            <PageName>{props["pageName"]}</PageName>
        </HeaderWrapper>
        <MenuWrapper active = {slideMenu}>
            <Close onClick = {toggleMenu}>&#x02DF;</Close>
        </MenuWrapper>
        <Overlay onClick = {toggleMenu} active = {slideMenu} /> 
    </>
}