import React, { useState, useEffect } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import Slider from  "./Slider";
import BussinessDetail from "./BussinessDetail";
import WorkDetail from "./WorkDetail";
import Testimonials from "./Testimonials";
import HomeFooter from "./Footer";


export default function Home(props){
    return <MobilePageLayout>
        <Slider />
        <BussinessDetail />
        <WorkDetail />
        <Testimonials/>
        <HomeFooter/>
    </MobilePageLayout>
}