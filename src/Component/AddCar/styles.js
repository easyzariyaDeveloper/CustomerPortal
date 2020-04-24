import styled from "styled-components";

const dark_font_color = "#02133C";
const base_spacing = "10";

export const AddCarPageWrapper = styled.div`
  background-size: cover;
  min-height: 500px;
  position: relative;
  text-align: center;
  background: rgb(191, 190, 203);
  background: linear-gradient(
    90deg,
    rgba(191, 190, 203, 1) 4%,
    rgba(106, 113, 117, 1) 69%
  );
  padding: 5% 0;
`;

export const AddCarPageHeader = styled.h1`
  font-weight: bold;
  font-size: 60px;
  color: white;
  letter-spacing: 1.6px;
  text-transform: capitalize;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  right: 12%;
`;
