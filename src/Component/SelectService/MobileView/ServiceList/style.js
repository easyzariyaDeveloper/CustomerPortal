import styled from "styled-components";
import { base_spacing } from "../../../../Assets/style-var";


export const MServiceListWrapper= styled.div`
    padding-top:40px;
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
    padding-right: 20px;
`;

export const RightDiv = styled.div`
    width:180px;
    padding-right:20px;
`;

export const ServiceListImages = styled.img``;

export const CostPara = styled.p`
    text-align: center;
    font-weight:500;
    padding: 10px 5px 5px 5px;

`;

export const PackagesDetails = styled.div`
    display: inline-block;
`;

export const PackageName = styled.h1`
    font-weight: bold;
`;

export const ServiceMenu = styled.p`
    padding-top: 3px;
    font-size: 15px;
`;

export const AddButton = styled.button`
    background: #1DA0BC;
    border-radius: 6px;
    color: white;
    width: 55px;
    border-style: none;
    height: 25px;
`;

export const ButtonDiv = styled.div`
    display:flex;    
    position: absolute;
    bottom: 15px;
    right: 20px;
`;

