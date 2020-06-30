import styled from "styled-components";
import { base_spacing, secondary_font_color, ez_button_color } from "../../../../Assets/style-var";

export const MapWrapper = styled.div`
    margin: 0 auto;
    background-color: white;  
    height: 700px;
    position: relative;
`;


export const SubHeader = styled.h1`
    text-align: center;
    font-size: ${base_spacing * 2}px;
    color: ${secondary_font_color};
    padding: ${base_spacing * 1.5}px 0;
`;


export const Tagdiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    padding: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;
`;

export const ButtonDiv = styled.div`
    text-align:center;
    padding: 30px;
    display: flex;
    justify-content: center;
`;

export const SubmitButton = styled.div`
    height: 30px;
    width:100px;
    background: ${ez_button_color};
    border-radius: 6px;
    color:white;
    cursor: pointer;
`;