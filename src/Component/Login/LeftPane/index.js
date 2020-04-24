import React from "react";
import {LeftPaneWrapper, Pic, AppDnld, AppLink} from "./style"


export default function LeftPane(props) {
    return <LeftPaneWrapper>
        <Pic src = "src/Assets/img/Phone.png" alt = "phone"></Pic>
        <AppDnld>For the best experience,<br></br>Download our Mobile App</AppDnld>
        <AppLink src = "src/Assets/img/AppleStore.png" alt = "PlayStore" />
        <AppLink src = "src/Assets/img/GooglePlay.png" alt = "PlayStore" />
    </LeftPaneWrapper>
}