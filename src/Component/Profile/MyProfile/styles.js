import styled from "styled-components";
import { base_spacing } from "../../../Assets/style-var";

export const ProfileContent = styled.div`
  display: flex;
`;

export const ProfileImage = styled.div`
  margin: ${base_spacing * 3}px 0 0 ${base_spacing * 5}px;
`;

export const ProfileForm = styled.form`
  padding: 5% 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const MidHeader = styled.h3`
  color: #4b4b4b;
  text-align: center;
  font-size: 19px;
  font-weight: 500;
  margin: ${base_spacing * 3}px 0;
  line-height: 26px;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.url,
}))`
  width: 150px;
  height: 150px;
  border: 1px solid blue;
  border-radius: 50%;
  background-blend-mode: normal;
`;

export const ActionButtonWrapper = styled.div`
  margin: auto;
  margin-right: 0px;
`;
