import styled from "styled-components";
import { base_spacing, ez_button_color, white_color, desktop_gradient, disabled_button_color } from "../../../Assets/style-var";
import { EZCard } from "../../Common/MobileCard";
import CloseIcon from '@material-ui/icons/Close';


export const ProfilePicDiv = styled.div`
    background: ${desktop_gradient};
    height: ${base_spacing * 20}px;
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

export const ChangePasswordButton = styled.button`
    width: 100%;
    height: ${base_spacing * 4}px; 
    border: none;
    border-radius: 5px;
    text-align: center;
    background: ${ez_button_color};
    color: ${white_color};
    font-size: ${base_spacing *1.8}px;
    background: ${({label}) => !label? ez_button_color: 'white'};
    color: ${({label}) => !label? white_color: 'black'};
    border: ${({label}) => !label? null: 'none'}
`;

export const ProfileButtonWrapper = styled.div`
    text-align: center;
    padding: ${base_spacing}px 0;
    width: 80%;
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
    font-size: ${base_spacing *1.8}px;
`;

export const ProfileTabWrapper = styled.div`
    position: absolute;
    top: -${base_spacing * 4.5}px;
`;

export const ProfileDiv = styled.div`
    height:${base_spacing *2}px;
    width: ${base_spacing *2}px;
    border-radius: 50%;
`;

export const ProfileCard = styled(EZCard)`
    padding: ${base_spacing}px;
    border-radius: ${base_spacing/2}px;
`;

export const ChangePasswordDiv = styled.div`
    text-align: center;
    width: 80%;
    margin: 0 auto;
`;

export const ProfileImageDiv = styled.div`
    height:20px;
    width:20px;
    border-radius:50%;
    border: 1px solid black
`;

export const PasswordSaveButton = styled.button`
    width: 100%;
    height: ${base_spacing * 4.5}px; 
    border: none;
    border-radius: 5px;
    text-align: center;
    background: ${ez_button_color};
    color: ${white_color};
    font-size: ${base_spacing *1.8}px;
    background-color : ${({disabled}) => disabled ? disabled_button_color : ez_button_color}
`;

export const CollapseLabel = styled.div`
    height: 40px;
    line-height: 40px;
    text-align: left;
    position: relative;
    margin: 0 -${base_spacing}%;
`;

export const CancelIcon = styled(CloseIcon)`
    float:right;
`;

