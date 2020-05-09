import React from "react";
import { PageWrapper, Content } from "../styles";
import Header from "./Header";


export default function PageLayout(props) {
  return (
    <PageWrapper className="container">
      <Header pageName = {props.pageName}/>
      <Content>
        {props.children}
      </Content>
    </PageWrapper>
  );
}
