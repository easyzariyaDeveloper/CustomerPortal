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
    position: relative;

    .MuiTabs-centered{
        centerd: true;
    }
`;

export const ChangePasswordDiv = styled.div`
    text-align: center;
    padding-top: ${base_spacing*2.5}px;
`;

export const ProfileButtonWrapper = styled.div`
    text-align: center;
    padding: ${base_spacing * 2}px 0;
    width: 50%;
    margin: 0 auto;
`;

export const ProfileActionButton = styled.button`
    width: 100%;
    height: ${base_spacing * 4.5}px; 
    border: none;
    border-radius: 5px;
    text-align: center;
    background: ${ez_button_color};
    color: ${white_color};
    font-size: 18px;
`;

export const ProfileTabWrapper = styled.div`
    position: absolute;
    top: -${base_spacing * 4.5}px;
`;



