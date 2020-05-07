import styled from "styled-components";
import { Link } from "react-router-dom";

const link_font_size = "15px";
export const SubHeaderWrapper = styled.div`
  background: linear-gradient(
    58.02deg,
    #62b58f 0.29%,
    #29c3be 52.74%,
    #03b3ad 100%
  );
  height: fit-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 20%;
`;
export const StyledLink = styled(Link)`
  padding: 0 15px;
  color: #000000;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
  font-size: ${link_font_size};
  vertical-align: middle;
`;
export const SubHeaderLinks = styled.div`
  display: flex;
`;
export const SubHeaderRightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Cart = styled.img``;
export const Search = styled.img``;
