import React from "react";
import {
  AboutCompany,
  AboutCompanyText,
  CompanyConnect,
  Link,
  Logo,
} from "./styles";

export default function Left({ icons, blurb_text, logo }) {
  return (
    <AboutCompany>
      {" "}
      <Logo logo={logo}>EASY ZARIYA</Logo>
      <AboutCompanyText>{blurb_text}</AboutCompanyText>
      <CompanyConnect>
        {icons.map((icon, id) => {
          const Image = icon.img;
          return (
            <Link key={id} to={icon.to}>
              <Image />
            </Link>
          );
        })}
      </CompanyConnect>
    </AboutCompany>
  );
}
