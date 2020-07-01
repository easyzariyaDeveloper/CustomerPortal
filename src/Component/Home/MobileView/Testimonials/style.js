import styled from "styled-components";
import { base_spacing } from "../../../../Assets/style-var";

export const TestimonialHeader= styled.h1`
    letter-spacing: 0.15px;
    text-align: center;
    padding-bottom: ${base_spacing*1.2}px;
    font-weight: 600;
    font-size: ${base_spacing*2.2}px;
`;

export const QuotationImage= styled.img`
    float: right;
    width: 40px;
    height: 40px;
    padding-bottom:10px
`;

export const Testimonial = styled.h3`
display: inline-block;
text-align: left;
letter-spacing: 0.15px;
`;

export const PersondDiv= styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    padding: ${base_spacing * 1.5}px;
`;

export const PersondName= styled.p`
    margin-left: ${base_spacing}px;
`;