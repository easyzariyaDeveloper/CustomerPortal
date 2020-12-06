import styled from "styled-components";
import { base_spacing, ez_button_color, white_color, desktop_gradient, disabled_button_color } from "../../../Assets/style-var";
import { EZCard } from "../../Common/MobileCard";
import CloseIcon from '@material-ui/icons/Close';
import { MobileActionButton } from "../../../Assets/common-styled";


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
    position: relative;
   
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


export const PageLink = styled.a`
    color: white;
    text-decoration: none;
`;

export const AddressLineWrapper = styled.div`
    padding: ${base_spacing}px;
`;

export const AddressLine = styled.p`
    padding: ${base_spacing/2}px 0;
    font-size: ${base_spacing*1.4}px;
    line-height: ${base_spacing*2.8}px;
    letter-spacing: 0.15px;
    color: #4B4B4B;
    display: inline-block;
`;

export const AddressLabelWrapper = styled.div`
    background: white;
    color: ${ez_button_color};
    border: 1px solid ${ez_button_color};
    padding: 0px 10px;
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: ${base_spacing}px;
`;

export const AddressIcon = styled.p`
    font-size: 20px;
`;

export const AddressLabel = styled.p`
    display: inline-block;
    font-size: 14px;
    vertical-align: bottom;
    padding: 5px;
`;


export const CarDetailsCard = styled(ProfileCard)`
    padding-left: 90px;
    position: relative;
    
`;
export const CarImage = styled.img`
    width:65px;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate3d(0,-50%,0);
`;

export const LabelHeading = styled.p`
    padding: ${base_spacing*0.8}px ${base_spacing}px;
    text-transform: capitalize;
    font-size: 15px;

    label {
        color: rgba(0, 0, 0, 0.54);
        font-size: 15px;
    }
`;

export const KebabMenuCard = styled(EZCard)`
    position: absolute;
    right:10px;
    top: 0px;
    min-width: 100px;
    padding: 5px;
    display: grid;
`;

export const KebabMenuButton = styled.button`
    border: none;
    outline: none;
    padding: ${base_spacing}px;
    text-align: left;
    color: black;
    background: white;
    cursor: pointer;
    font-size: 15px;
    background: ${({enabled}) => enabled ? 'rgba(29, 160, 188, 0.7);' : 'transparent'};
`;

export const OrderHistoryHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${base_spacing}px;
    margin-bottom: ${base_spacing/2}px;
    color: rgba(0, 0, 0, 0.54);
    border-bottom: 1px dashed;
`;

export const OrderDetailsButton = styled(MobileActionButton)`
    margin: 5px;
`;

export const OrderDownloadButton = styled.a`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    text-align: center;
    background: ${ez_button_color};
    color: ${white_color};
    font-size: 18px;
    outline: transparent;
    margin: 5px;
    text-decoration:none;
    padding: ${base_spacing}px 0px;
`;