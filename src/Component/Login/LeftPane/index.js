import React from "react";
import {LeftPaneWrapper, Pic, AppDnld, AppLink} from "./style"


export default function LeftPane(props) {
    return <LeftPaneWrapper>
        <Pic src = "src/Assets/img/Phone.jpg" alt = "phone"></Pic>
        <AppDnld>For the best experience,<br></br>Download our Mobile App</AppDnld>
        <AppLink src = "src/Assets/img/AppleStore.jpg" alt = "AppleStore" />
        <AppLink src = "src/Assets/img/GooglePlay.jpg" alt = "PlayStore" />
    </LeftPaneWrapper>
}