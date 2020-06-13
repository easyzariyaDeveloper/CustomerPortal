import styled from "styled-components";
import AccountImg from "../../../Assets/img/accountImg.jpg"


export const AccountBackgroundImg = styled.div`
    background: url(${AccountImg});
    background-size: cover;
    height:230px; 
    position:relative;
`; 

export const AccountImgOverlay = styled.div`
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    height: 230px;
    background-color: blue;
    opacity: 0.2;
`;


export const MAccountWrapper= styled.div`
    position: relative;
    width:90%;
    margin: auto;
    top: -80px;
}
`;
export const MAccountCard = styled.div`
    background:white;
    border-radius: 10px;
`;


export const FbLoginButton = styled.button`
    border: none;
    color: white;
    background: #3B5999;
    border-radius: 5px;
    height: 35px;
    width: 115px;
    font-size:300;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const GoogleLoginButton = styled.button`
    border: none;
    color: black;
    background: white;
    border-radius: 5px;
    height: 35px;
    width: 100px;
    font-size:300;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

  