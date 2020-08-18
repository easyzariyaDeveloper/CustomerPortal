import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { ProfilePicDiv, ProfileWrapper } from "./style";
import ProfileTab from "./ProfileTab";
import Avatar from '@material-ui/core/Avatar';

export default function Profile() {
    return<MobilePageLayout noborder = {true}>
        <ProfilePicDiv>
            <Avatar alt="Profile Pic" src={""} style = {{height: "80px", width: "80px", position: "absolute", bottom: "50%", left: "40%"}}/>
        </ProfilePicDiv>
        <ProfileWrapper>
            <ProfileTab />
        </ProfileWrapper>
    </MobilePageLayout>
}