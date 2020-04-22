import React, { PureComponent } from "react";
import { PageWrapper } from "./styles";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Footer from "./Footer";

export default function PageLayout(props){
    return <PageWrapper className = "container">
        <Header className = "vertical-center-element"/>
        <SubHeader />
        {props.children}
        <Footer/>
    </PageWrapper>
}