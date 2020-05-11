import React from "react";

import {
  SubHeaderWrapper,
  Link,
  SubHeaderLinks,
  SubHeaderRightSection,
  Cart,
  Search,
} from "./styles";

export default function SubHeader() {
  return (
    <SubHeaderWrapper>
      <Link active={"true"} to="add-car">
        Add Car
      </Link>

      <SubHeaderLinks>
        {" "}
        <Link to="home">Home</Link>
        <Link to="about">About us</Link>
        <Link to="services">Services</Link>
        <Link to="franchise">Franchise</Link>
      </SubHeaderLinks>
      <SubHeaderRightSection>
        <Link to="login">Login</Link>

        <Search></Search>
        <Cart></Cart>
      </SubHeaderRightSection>
    </SubHeaderWrapper>
  );
}
