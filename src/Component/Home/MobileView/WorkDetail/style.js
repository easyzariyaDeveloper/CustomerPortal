import styled from "styled-components";

export const HomeCardWrapper= styled.div`
    padding:20px;
`;

export const HomeCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding:10px;
    display: grid;
    grid-template-columns: 1fr 3.5fr ;
    margin: 20px 0;
`;

export const HomeScreenImage = styled.img`
    width: 60px;
    height: 60px;
`;

export const WorkDetailHeader = styled.h1`
letter-spacing: 0.15px;
color: #1DA0BC;
`;

export const WorkDetailSubheader = styled.h3`
padding-top: 10px;
    letter-spacing: 0.15px;
`;