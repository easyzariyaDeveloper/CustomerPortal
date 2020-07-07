import React, {useState} from "react";
import Switch from 'react-ios-switch';
import { Header, Label, SwitchWrapper, Wrapper } from "../BussinessDetail/style";
import { HomeCard, HomeCardDetail, HomeScreenImage, HomeCardWrapper, WorkDetailHeader,WorkDetailSubheader } from "./style";
import { WorkshopIcon, DoorstepIcon } from "../../Images";

//https://www.npmjs.com/package/react-ios-switch

export default function BussinessDetail(){
    const [howItWorkSwitch, setHowItWorkSwitch] = useState(false);
    return <Wrapper>
        <Header>How it works?</Header>
        <SwitchWrapper>
            <Label>Workshop</Label>
            <Switch 
                checked = {howItWorkSwitch}
                handleColor = {"#1DA0BC"}
                offColor = {"#FFFFFF"}
                onColor = {"#FFFFFF"}
                style = {{
                    "boxShadow" : "0 1px 6px rgba(32, 33, 36, 0.28)"
                }}
                onChange={() => setHowItWorkSwitch(!howItWorkSwitch)}
            />
            <Label>Doorstep</Label>
        </SwitchWrapper>
        {
            !howItWorkSwitch ? 
            <HomeCardWrapper>
                <HomeCard>
                    <HomeScreenImage src = {WorkshopIcon.Calendar} />
                    <div>
                        <WorkDetailHeader>1. Book &amp; Schedule</WorkDetailHeader>
                        <WorkDetailSubheader>Book your required service &amp; schedule free pick &amp; drop or walk-in directly at your convenient time from our app/website.</WorkDetailSubheader>
                    </div>
                </HomeCard> 
                <HomeCard>
                    <HomeScreenImage src = {WorkshopIcon.Report} />
                    <div>
                        <WorkDetailHeader>2.Car Health Report (CHR)</WorkDetailHeader>
                        <WorkDetailSubheader>Get CHR after detail diagnosis of your vehicle and know the health of your car.</WorkDetailSubheader>
                    </div>
                </HomeCard> 
                <HomeCard>
                    <HomeScreenImage src = {WorkshopIcon.TimeUpdate} />
                    <div>
                        <WorkDetailHeader>3. Real Time Update</WorkDetailHeader>
                        <WorkDetailSubheader>You will get real time updates of each steps & approval will be for any service required.</WorkDetailSubheader>
                    </div>
                </HomeCard> 
                <HomeCard>
                    <HomeScreenImage src = {WorkshopIcon.Spare} />
                    <div>
                        <WorkDetailHeader>4. Transparency</WorkDetailHeader>
                        <WorkDetailSubheader>We will share before & after photos of the service and new spare part photos. </WorkDetailSubheader>
                    </div>
                </HomeCard> 
                <HomeCard>
                    <HomeScreenImage src = {WorkshopIcon.Payment} />
                    <div>
                        <WorkDetailHeader>5. Payment After Service</WorkDetailHeader>
                        <WorkDetailSubheader>Payment will be taken after giving your car and bill with proper bifurcation.  </WorkDetailSubheader>
                    </div>
                </HomeCard> 
            </HomeCardWrapper>
            : <HomeCardWrapper>
                <HomeCard>
                    <HomeScreenImage src = {WorkshopIcon.Calendar} />
                    <div>
                        <WorkDetailHeader>1. Book &amp; Schedule</WorkDetailHeader>
                        <WorkDetailSubheader>Book your required service at your convenient time from our app/website .</WorkDetailSubheader>
                    </div>
                </HomeCard> 
                <HomeCard>
                    <HomeScreenImage src = {DoorstepIcon.Doorstep} />
                    <div>
                        <WorkDetailHeader>2. Doorstep Service</WorkDetailHeader>
                        <WorkDetailSubheader>Our Trained technician will reach your place at given time & start service. </WorkDetailSubheader>
                    </div>
                </HomeCard> 
                <HomeCard>
                    <HomeScreenImage src = {WorkshopIcon.Payment} />
                    <div>
                        <WorkDetailHeader>3. Payment After Service</WorkDetailHeader>
                        <WorkDetailSubheader>Payment will be taken after giving your car and bill with proper bifurcation.</WorkDetailSubheader>
                    </div>
                </HomeCard> 
            </HomeCardWrapper>       
        }
    </Wrapper>
}