import React from "react";
import { Link } from "react-router-dom";
import {
  SubHeaderWrapper,
  StyledLink,
  SubHeaderLinks,
  SubHeaderRightSection,
  Cart,
  Search,
} from "./styles";

export default function SubHeader() {
  return (
    <SubHeaderWrapper>
      <StyledLink active={"true"} to="/add-car">
        Add Car
      </StyledLink>

      <SubHeaderLinks>
        {" "}
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/about">About us</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/franchise">Franchise</StyledLink>
      </SubHeaderLinks>
      <SubHeaderRightSection>
        <StyledLink to="/login">Login</StyledLink>

        <Search></Search>
        <Cart></Cart>
      </SubHeaderRightSection>
    </SubHeaderWrapper>
  );
}
