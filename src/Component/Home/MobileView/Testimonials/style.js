import styled from "styled-components";
import { base_spacing } from "../../../../Assets/style-var";

export const QuotationImage= styled.img`
    float: right;
    width: ${base_spacing * 4}px;
    height: ${base_spacing * 4}px;
    padding-bottom:${base_spacing}px;
`;

export const Testimonial = styled.p`
    display: inline-block;
    text-align: left;
    letter-spacing: 0.35px;
    font-size: 13px;
    line-height: 14px;
    font-weight:300;
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