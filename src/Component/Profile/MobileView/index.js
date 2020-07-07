import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { ProfilePicDiv, ProfileWrapper } from "./style";
import ProfileTab from "./ProfileTab";

export default function Profile() {
    return<MobilePageLayout noborder = {true}>
        <ProfilePicDiv/>
        <ProfileWrapper>
            <ProfileTab />
        </ProfileWrapper>
    </MobilePageLayout>
}