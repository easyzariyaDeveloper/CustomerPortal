import styled from "styled-components";
import AccountImg from "../../../Assets/img/accountImg.jpg"
import { base_spacing, white_color, desktop_gradient } from "../../../Assets/style-var";


export const AccountBackgroundImg = styled.div`
    background: url(${AccountImg});
    background-size: cover;
    height: ${base_spacing * 23}px;
    position:relative;
`; 

export const AccountImgOverlay = styled.div`
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    height: ${base_spacing * 23}px;
    background: ${desktop_gradient};
    opacity: 0.7;
`;


export const MAccountWrapper= styled.div`
    position: relative;
    width:90%;
    margin: auto;
    top: -${base_spacing*8}px;
}
`;
export const MAccountCard = styled.div`
    background: ${white_color};
    border-radius: ${base_spacing}px;
`;

export const SocialButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: ${base_spacing*2}px 0;
`;

export const FbLoginButton = styled.button`
    border: none;
    color: ${white_color};
    background: #3B5999;
    border-radius: ${base_spacing/2}px;
    height: ${base_spacing*3.5}px;
    width: ${base_spacing*11.5}px;
    font-size:300;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const GoogleLoginButton = styled.button`
    border: none;
    color: black;
    background: ${white_color};
    border-radius: ${base_spacing/2}px;
    height: ${base_spacing*3.5}px;
    width: ${base_spacing*10}px;
    font-size:300;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ValidationPara = styled.p`
    font-size: ${base_spacing}px;
    color: gray;
    width: 80%;
    margin: 10px auto
`;

  