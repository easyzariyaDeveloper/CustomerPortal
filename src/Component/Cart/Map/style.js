import styled from "styled-components";
import { base_spacing, secondary_font_color } from "../../../Assets/style-var";
import ActionButton from "../../Common/ActionButton";

export const MapWrapper = styled.div`
    margin: 0 auto;
    width: 75%;
    background-color: white;  
    height: 700px;
    position: relative;
`;

export const CenterHeader = styled.h1`
    text-align: center;
    font-size: ${base_spacing * 3}px;
    font-weight: bold;
    color: ${secondary_font_color};
    padding: ${base_spacing * 1.5}px 0;
`;

export const SubHeader = styled.h1`
    text-align: center;
    font-size: ${base_spacing * 2}px;
    color: ${secondary_font_color};
    padding: ${base_spacing * 1.5}px 0;
`;

export const AddressLabel = styled.p`
    margin: 30px 0px; 
`;

export const ConfirmButton = styled(ActionButton)`
    width: 200px;
    marging-top: 20px;
    float: right;
`;

export const CloseButton = styled.button`
    position: absolute;
    right: ${base_spacing}px;
    top: ${base_spacing}px;
    width: 35px;
    height: 35px;
    font-size: 15px;
    background: transparent;
    border: 0;
    cursor: pointer;
    outline: transparent;
`;