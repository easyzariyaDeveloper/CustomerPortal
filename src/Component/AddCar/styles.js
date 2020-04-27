import styled from "styled-components";

const dark_font_color = "#02133C";
const base_spacing = "10";

export const AddCarPageWrapper = styled.div`
  background-size: cover;
  display: flex;
  position: relative;
  align-items: flex-start;

  // min-height: 500px;
  text-align: center;
  background: rgb(191, 190, 203);
  background: linear-gradient(
    90deg,
    rgba(191, 190, 203, 1) 4%,
    rgba(106, 113, 117, 1) 69%
  );
  padding: 7% 10%;
`;

export const AddCarPageHeader = styled.h1`
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 50px;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  font-weight: bold;
  color: white;
  letter-spacing: 8px;
  text-transform: capitalize;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  right: 12%;
`;
