import styled from "styled-components";
export const Link = styled.a`
  padding: 10px 0;
  flex: 1;
  text-transform: capitalize;
  cursor: pointer;
`;

export const QuickLinks = styled.div`
  flex: 1;
  padding: 0 5%;
  font-weight: bold;
`;

export const QuickLinksSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`;
export const QuickLinkHeader = styled.h1`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const QuickLinksRow = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;
