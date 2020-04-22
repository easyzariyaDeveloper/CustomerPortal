import styled from "styled-components";
import backgroundBanner from "../../Assets/img/services_page_bg.jpg";

const dark_font_color = "#02133C";
const base_spacing = "10";


export const ServicePageWrapper = styled.div`
    background:url(${backgroundBanner});  
    background-size: cover;
    min-height: 750px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const ServicePageHeader = styled.h1`
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 55px;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
`;

export const ServiceData = styled.section`
    width: 250px;
    height: 200px;
    background: white;
    padding: 40px;
    float: left;
`;

export const ServiceDataHeader = styled.h2`
    color: ${dark_font_color};
    margin-bottom: ${base_spacing * 3}px;
    font-size: 30px;
`;

export const ServiceDataInfo = styled.p`
    color: black;
    margin-bottom: ${base_spacing * 3}px;
`;
