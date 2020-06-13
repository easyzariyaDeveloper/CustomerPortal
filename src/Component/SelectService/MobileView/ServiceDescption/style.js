import styled from "styled-components";

export const ImageContentDiv = styled.div`
    display: flex;
    justify-content: space-around;
    background: white;
    padding: 5px; 
    font-weight: 600
`;

export const FeatureHeader = styled.h1`
    font-style:italic;
    font-weight: bold;
    font-size: 25px;
    line-height: 19px;
    margin-left: 30px;
    padding: 10px;
    
`;

export const IndividualService = styled.p`
    line-height: 25px;
    margin-left: 30px;
    font-size: 17px;
`;

export const BottomDiv = styled.div`
    background: #1DA0BC;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const AddServiceButton = styled.button`
    color:white;
    background: #1DA0BC;
    border: 1px solid white;
    border-radius: 5px;
    width: 55px;
    height: 25px;
`;