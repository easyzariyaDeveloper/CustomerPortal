import styled from "styled-components";
import { base_spacing, ez_button_color } from "../../../../Assets/style-var";


export const MServiceListWrapper= styled.div`
    padding:40px 0;
`;

export const ServiceListCard= styled.div`
    width: 90%;
    height: auto;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: ${base_spacing *1.5}px;
    padding: ${base_spacing}px;
    margin-bottom: 30px;
    position: relative;
`;
export const ServiceListCardWrapper = styled.a`
    display:flex;
    cursor:pointer;
    text-decoration: none;
    color:black;
`;

export const LeftDiv = styled.div`
    padding-right: 15px;
`;

export const RightDiv = styled.div`
    padding-right:20px;
`;

export const ServiceListImages = styled.img``;

export const CostPara = styled.p`
    text-align: center;
    font-weight:500;
    padding: 10px 5px 5px 5px;
    font-size:15px;

`;

export const PackagesDetails = styled.div`
    display: inline-block;
`;

export const PackageName = styled.h1`
    font-weight: bold;
`;

export const ServiceMenu = styled.p`
    font-size: 14px;
    padding-top: 2px;
`;

export const AddButton = styled.button`
    background: ${ez_button_color};
    border-radius: 6px;
    color: white;
    width: 55px;
    border-style: none;
    height: 25px;
`;

export const ButtonDiv = styled.div`
    display:flex;    
    position: absolute;
    bottom: 10px;
    right: 20px;
`;

export const TimerPara= styled.p`
    color: #4B4B4B;
    display: inline-block;
    padding: 5px;
    vertical-align: baseline;
    font-size: 15px
`;

export const TickImg = styled.img`
vertical-align: middle;
padding-left: 5px
`;

export const ServiceCount = styled.p`
padding-top: 8px;
font-size: 11px
`;

export const ListImg = styled.img`
    height: 28px;
`;