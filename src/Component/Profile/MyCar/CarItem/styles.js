import styled from "styled-components";
import { base_spacing } from "../../../../Assets/style-var";

export const CarInfo = styled.div`
  flex: 2;
  margin: auto ${base_spacing}px;
`;
export const CarImg = styled.img.attrs((props) => ({
  src: props.url,
}))`
  flex: 2;
  width: 329.91px;
  height: 181.01px;
`;
export const ButtonList = styled.div`
  flex: 0.5;
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 5%;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  max-height: 240px;
`;

export const EditButton = styled.button`
  border: 0.445826px solid #4b4b4b;
  box-sizing: border-box;
  height: 24.97px;
`;
export const DeleteButton = styled.button`
  background: #e30b0b;
  opacity: 0.74;
  height: 24.97px;
`;
