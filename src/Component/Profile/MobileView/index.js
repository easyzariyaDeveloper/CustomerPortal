import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { ProfilePicDiv, ProfileWrapper } from "./style";
import ProfileTab from "./ProfileTab";

export default function Profile() {
    return<MobilePageLayout>
        <ProfilePicDiv/>
        <ProfileWrapper>
            <ProfileTab />
        </ProfileWrapper>
    </MobilePageLayout>
}