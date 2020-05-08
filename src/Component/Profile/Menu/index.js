import React from "react";
import { Link } from "react-router-dom";
import { MenuBox, MenuHeader, StyledLink } from "./styles";
export default function index({ active_page, onClick }) {
  const links = [
    { to: "profile/1", text: "My Profile" },
    { to: "profile/2", text: "My Cars" },
    { to: "profile/3", text: "Address List" },
    { to: "/profile/4", text: "Order History" },
  ];
  return (
    <MenuBox>
      <MenuHeader>MENU</MenuHeader>
      <ul>
        {links.map((link, ind) => (
          <StyledLink
            active={ind + 1 === active_page ? "true" : "false"}
            key={link.to}
            to={"#"}
            onClick={() => onClick(ind + 1)}
          >
            {link.text}
          </StyledLink>
        ))}
      </ul>
    </MenuBox>
  );
}
