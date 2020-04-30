import React from "react";
import {
  AboutCompany,
  AboutCompanyText,
  CompanyConnect,
  ConnectIcon,
  Logo,
} from "./styles";
export default function index({ icons, blurb_text, logo }) {
  return (
    <AboutCompany>
      {" "}
      <Logo logo={logo}>EASY ZARIYA</Logo>
      <AboutCompanyText>{blurb_text}</AboutCompanyText>
      <CompanyConnect>
        {icons.map((icon, id) => (
          <ConnectIcon key={id} img={icon.img} />
        ))}
      </CompanyConnect>
    </AboutCompany>
  );
}
