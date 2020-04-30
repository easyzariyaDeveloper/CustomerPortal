import React from "react";
import {
  ContactBox,
  ContactBoxHeader,
  ContactColumn,
  ContactInfo,
  ContactIcon,
  ContactHead,
} from "./styles";
import PropTypes from "prop-types";

export default function index({ contacts }) {
  const col = contacts.map((contact) => (
    <ContactHead key={contact.text}>
      <ContactIcon img={contact.img} />
      <ContactInfo>${contact.text}</ContactInfo>
    </ContactHead>
  ));
  return (
    <ContactBox>
      <ContactBoxHeader>Contact</ContactBoxHeader>
      <ContactColumn>{col}</ContactColumn>
    </ContactBox>
  );
}

index.propTypes = {
  contacts: PropTypes.array.isRequired,
};
