import React from "react";
import Slider from "react-slick";
import { ContentWrapper, Content, Header, Wrapper } from "../BussinessDetail/style";
import { QuotationImage, Testimonial, PersondDiv, PersondName } from "./style";
import Quotation from "../../Images/quotation.jpg"
import PersonImg from "../../Images/personImg.jpg"

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "70px",
    slidesToShow: 1,
    speed: 500,
    swipe: true,
    autoplay: true
};

export default function Testimonials(props) {
    return <Wrapper>
        <Header>Testimonials</Header>
        <Slider {...settings}>
            <ContentWrapper>
                <Content>
                    <QuotationImage src={Quotation} />
                    <Testimonial>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</Testimonial>
                    <PersondDiv>
                        <img style={{ verticalAlign: "middle" }} src={PersonImg} />
                        <PersondName>John Doe</PersondName>
                    </PersondDiv>
                </Content>
            </ContentWrapper>
            <ContentWrapper>
                <Content>
                    <QuotationImage src={Quotation} />
                    <Testimonial>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</Testimonial>
                    <PersondDiv>
                        <img style={{ verticalAlign: "middle" }} src={PersonImg} />
                        <PersondName>John Doe</PersondName>
                    </PersondDiv>
                </Content>
            </ContentWrapper>
            <ContentWrapper>
                <Content>
                    <QuotationImage src={Quotation} />
                    <Testimonial>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</Testimonial>
                    <PersondDiv>
                        <img style={{ verticalAlign: "middle" }} src={PersonImg} />
                        <PersondName>John Doe</PersondName>
                    </PersondDiv>
                </Content>
            </ContentWrapper>
        </Slider>
    </Wrapper>
}
