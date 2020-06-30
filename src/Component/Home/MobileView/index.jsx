import React, { useState, useEffect } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import Slider from  "./Slider";
import BussinessDetail from "./BussinessDetail";


export default function Home(props){
    return <MobilePageLayout>
        <Slider />
        <BussinessDetail />
    </MobilePageLayout>
}