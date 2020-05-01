import React from "react";
import { PageWrapper } from "../styles";
import Header from "./Header";


export default function PageLayout(props) {
  return (
    <PageWrapper className="container">
      <Header />
      {props.children}
    </PageWrapper>
  );
}
