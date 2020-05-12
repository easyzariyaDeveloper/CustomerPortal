import React from "react";
import { MenuBox, MenuHeader, StyledLink } from "./styles";
export default function index({ active_page }) {
  const links = [
    { to: "/profile", text: "My Profile" },
    { to: "/profile/cars", text: "My Cars" },
    { to: "/profile/addresses", text: "Address List" },
    { to: "/profile/orders", text: "Order History" },
  ];
  return (
    <MenuBox>
      <MenuHeader>MENU</MenuHeader>
      <ul>
        {links.map((link) => (
          <StyledLink
            active={active_page === link["to"]}
            key={link.to}
            to={link.to}
          >
            {link.text}
          </StyledLink>
        ))}
      </ul>
    </MenuBox>
  );
}
