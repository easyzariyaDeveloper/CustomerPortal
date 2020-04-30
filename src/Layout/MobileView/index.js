import React from "react";
import { PageWrapper } from "../styles";
export default function MobilePageLayout(props) {
  return (
    <PageWrapper className="container">
      {/* <Header className = "vertical-center-element"/>
        <SubHeader /> */}
      {props.children}
      {/* <Footer/> */}
    </PageWrapper>
  );
}
