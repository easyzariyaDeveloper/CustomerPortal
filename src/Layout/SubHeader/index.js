import React from "react";
import { Link } from "react-router-dom";
import {
  SubHeaderWrapper,
  Link1,
  SubHeaderLinks,
  SubHeaderRightSection,
  Cart,
  Search,
} from "./styles";

export default function SubHeader() {
  return (
    <SubHeaderWrapper>
      <Link1>
        <Link to="add-car">Add Car</Link>
      </Link1>
      <SubHeaderLinks>
        {" "}
        <Link1 active={true}>
          <Link to="home">Home</Link>
        </Link1>
        <Link1>
          <Link to="about">About us</Link>
        </Link1>
        <Link1>
          <Link to="services">Services</Link>
        </Link1>
        <Link1>
          <Link to="franchise">Franchise</Link>
        </Link1>
      </SubHeaderLinks>
      <SubHeaderRightSection>
        <Link1>
          <Link to="login">Login</Link>
        </Link1>
        <Search></Search>
        <Cart></Cart>
      </SubHeaderRightSection>
    </SubHeaderWrapper>
  );
}
