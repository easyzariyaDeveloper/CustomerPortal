import styled from "styled-components";
import { CommonBoxShadow, base_spacing } from "../../../../Assets/style-var";

export const HomeCardWrapper= styled.div`
    padding: 0 ${base_spacing *2}px;s
`;

export const HomeCard = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding:10px;
    display: grid;
    grid-template-columns: 1fr 3.5fr ;
    margin: 20px 0;
    align-items: center;
    ${CommonBoxShadow}

    &:last-child{
        margin-bottom: 0;
    }
`;

export const HomeScreenImage = styled.img`
    width: 50px;
    height: 50px;
`;

export const WorkDetailHeader = styled.h1`
    letter-spacing: 0.15px;
    color: #1DA0BC;
`;