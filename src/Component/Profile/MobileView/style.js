import styled from "styled-components";
import { base_spacing, ez_button_color, white_color, desktop_gradient } from "../../../Assets/style-var";

export const ProfilePicDiv = styled.div`
    background: ${desktop_gradient};
    height: ${base_spacing * 26.5}px;
    border-bottom-left-radius: ${base_spacing/5}px;
    border-bottom-right-radius:${base_spacing/5}px;
    position: relative;
`;

export const ProfileWrapper = styled.div`
position: absolute;
top: ${base_spacing * 25.6}px;

.MuiTabs-centered{
    centerd: true;
}
`;

export const AddressListDiv = styled.div`
    position: absolute; 
    left: ${base_spacing*2}px;
    right: ${base_spacing*2}px; 
    top: ${base_spacing*2}px;
    width: 100%;
`;

export const ChangePasswordDiv = styled.div`
    text-align: center;
    padding-top: ${base_spacing*2.5}px;
`;

export const SaveDiv = styled.div`
    text-align: center;
    padding: ${base_spacing*2}px 0;
`;

export const SaveProfileButton = styled.button`
    width: ${base_spacing*10}px;
    height: ${base_spacing*3}px; 
    border-radius: ${base_spacing/2}px;
    border: none;
    background: ${ez_button_color};
    color: ${white_color};
`;

export const AddCarDiv = styled.div`
    text-align: center;
    padding: ${base_spacing*5}px 0;
`;

export const AddCarButton = styled(SaveProfileButton)`
    width: ${base_spacing*11.5}px;
    height: ${base_spacing*3.5}px; 
`;




