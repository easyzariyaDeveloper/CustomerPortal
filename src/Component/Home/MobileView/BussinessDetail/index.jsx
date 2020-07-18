import React, {useState} from "react";
import Switch from 'react-ios-switch';
import Slider from "react-slick";
import { Header, Label, ContentWrapper, Content, 
    SwitchWrapper, CenterImage, CenterHeader,
    SubHeader, Wrapper
 } from "./style";
import {CustomerIcon,BusinessIcon} from "../../Images"


const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 400,
    swipe: true,
};

//https://www.npmjs.com/package/react-ios-switch

export default function BussinessDetail(){
    const [customerSwitch, setCustomerSwitch] = useState(false);
    return <Wrapper>
        <Header>Why EZ?</Header>
        <SwitchWrapper>
            <Label>Customers</Label>
            <Switch 
                checked = {customerSwitch}
                handleColor = {"#1DA0BC"}
                offColor = {"#FFFFFF"}
                onColor = {"#FFFFFF"}
                style = {{
                    "boxShadow" : "0 1px 6px rgba(32, 33, 36, 0.28)"
                }}
                onChange={() => setCustomerSwitch(!customerSwitch)}
            />
            <Label>Business Fleet</Label>
        </SwitchWrapper>
        {
            !customerSwitch ? 
            <Slider {...settings}>
                <ContentWrapper>
                    <Content>
                        <CenterImage src= {CustomerIcon["Fun"]}/>
                        <CenterHeader>User Friendly</CenterHeader>
                        <SubHeader>Book any service at your preferred time and enjoy free pick and drop at best price.</SubHeader>
                    </Content>
                </ContentWrapper>
                <ContentWrapper>
                    <Content>
                        <CenterImage src= {CustomerIcon["Worker"]}/>
                        <CenterHeader>In-House Trained Technician</CenterHeader>
                        <SubHeader>Book any service at your preferred time and enjoy free pick and drop at best price.</SubHeader>
                    </Content>
                </ContentWrapper>
                <ContentWrapper>
                    <Content>
                        <CenterImage src= {CustomerIcon["Award"]}/>
                        <CenterHeader>Genuine Spare Parts</CenterHeader>
                        <SubHeader>Book any service at your preferred time and enjoy free pick and drop at best price.</SubHeader>
                    </Content>
                </ContentWrapper>
                <ContentWrapper>
                    <Content>
                        <CenterImage src= {CustomerIcon["Green"]}/>
                        <CenterHeader>Sustainable</CenterHeader>
                        <SubHeader>Book any service at your preferred time and enjoy free pick and drop at best price.</SubHeader>
                    </Content>
                </ContentWrapper>
                <ContentWrapper>
                    <Content>
                        <CenterImage src= {CustomerIcon["Insurance"]}/>
                        <CenterHeader>Unique Car Health Report</CenterHeader>
                        <SubHeader>Book any service at your preferred time and enjoy free pick and drop at best price.</SubHeader>
                    </Content>
                </ContentWrapper>
                <ContentWrapper>
                    <Content>
                        <CenterImage src= {CustomerIcon["Transparency"]}/>
                        <CenterHeader>Transparency</CenterHeader>
                        <SubHeader>Book any service at your preferred time and enjoy free pick and drop at best price.</SubHeader>
                    </Content>
                </ContentWrapper>
            </Slider> : <Slider {...settings}>
                <ContentWrapper>
                    <Content>
                        <CenterImage src= {BusinessIcon["Flexibility"]}/>
                        <CenterHeader>Flexibility</CenterHeader>
                        <SubHeader>Custom pricing, requirements and scheduling as per your needs.</SubHeader>
                    </Content>
                </ContentWrapper>
                <ContentWrapper>
                    <Content>
                        <CenterImage src= {BusinessIcon["Resume"]}/>
                        <CenterHeader>Personal Account Manager</CenterHeader>
                        <SubHeader>Custom pricing, requirements and scheduling as per your needs.</SubHeader>
                    </Content>
                </ContentWrapper>
                <ContentWrapper>
                    <Content>
                        <CenterImage src= {BusinessIcon["Responsibility"]}/>
                        <CenterHeader>Corporate Social Responsibilty</CenterHeader>
                        <SubHeader>Custom pricing, requirements and scheduling as per your needs.</SubHeader>
                    </Content>
                </ContentWrapper>
                <ContentWrapper>
                    <Content>
                        <CenterImage src= {BusinessIcon["CarRepair"]}/>
                        <CenterHeader>OnSpot Service</CenterHeader>
                        <SubHeader>Custom pricing, requirements and scheduling as per your needs.</SubHeader>
                    </Content>
                </ContentWrapper>
            </Slider>
                    
        }
    </Wrapper>
}