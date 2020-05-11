import React from "react";
import {
  ContactBox,
  ContactBoxHeader,
  ContactColumn,
  ContactInfo,
  ContactHead,
} from "./styles";
import PropTypes from "prop-types";

export default function Right({ contacts }) {
  const col = contacts.map((contact) => {
    const Image = contact.img;
    return (
      <ContactHead key={contact.text}>
        <Image fontSize="small" />
        <ContactInfo>{contact.text}</ContactInfo>
      </ContactHead>
    );
  });
  return (
    <ContactBox>
      <ContactBoxHeader>Contact</ContactBoxHeader>
      <ContactColumn>{col}</ContactColumn>
    </ContactBox>
  );
}

Right.propTypes = {
  contacts: PropTypes.array.isRequired,
};
