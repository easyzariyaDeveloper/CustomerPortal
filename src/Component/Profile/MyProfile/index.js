import React, { useState } from "react";
import {
  ProfileBox,
  ProfileContent,
  ProfileImage,
  ProfileForm,
  MidHeader,
  Image,
  ActionButtonWrapper,
} from "./styles";
import { initialProfile } from "../MockData";
import InputGrp from "../../Common/InputGrp";
import ActionButton from "../../Common/ActionButton";
import { Header, Box } from "../styles";

export default function index() {
  const [profile, setProfile] = useState(initialProfile);
  const onChange = ({ target }) => {
    setProfile({ ...profile, [target.name]: target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(profile, "profile submitted");
  };
  return (
    <Box>
      <Header>My Profile</Header>
      <ProfileContent>
        <ProfileImage>
          <Image url={profile.profile_img} />
          {/* <Edit onChange={onChange}/> */}
        </ProfileImage>
        <ProfileForm onSubmit={onSubmit}>
          <InputGrp
            label="Name"
            name="name"
            placeholder="Add Name..."
            onChange={onChange}
            value={profile.name}
          />
          <InputGrp
            label="Email"
            name="email"
            placeholder="Add Email..."
            onChange={onChange}
            value={profile.email}
          />
          <InputGrp
            label="Ph. No."
            name="phone"
            placeholder="Add Phone no..."
            onChange={onChange}
            value={profile.phone}
          />
          <MidHeader>Change Password</MidHeader>
          <InputGrp
            label="Old Password"
            name="old_password"
            placeholder=""
            onChange={onChange}
            value={profile.old_password}
          />
          <InputGrp
            label="New Password"
            name="new_password"
            placeholder=""
            onChange={onChange}
            value={profile.new_password}
          />
          <InputGrp
            label="Confirm Password"
            name="confirm_password"
            placeholder=""
            onChange={onChange}
            value={profile.confirm_password}
          />
          <ActionButtonWrapper>
            <ActionButton label="SAVE" />
          </ActionButtonWrapper>
        </ProfileForm>
      </ProfileContent>
    </Box>
  );
}
