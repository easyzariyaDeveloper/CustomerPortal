import React from "react";
import {
  QuickLinks,
  QuickLinkHeader,
  QuickLinksRow,
  QuickLinksSection,
  Link,
} from "./styles";
import PropTypes from "prop-types";
export default function index({ rows_link }) {
  const qLSection = rows_link.map((row, id) => (
    <QuickLinksRow key={id}>{getLink(row)}</QuickLinksRow>
  ));
  return (
    <QuickLinks>
      <QuickLinkHeader>Quick Links</QuickLinkHeader>
      <QuickLinksSection>{qLSection}</QuickLinksSection>
    </QuickLinks>
  );
}

const getLink = (row) => {
  return row.map((link) => (
    <Link key={link.text} to={link.to}>
      {link.text}
    </Link>
  ));
};

index.propTypes = {
  rows_link: PropTypes.array.isRequired,
};
