import styled from "styled-components";
import { base_spacing, font_color, ez_button_color, CommonBoxShadow} from "../../../../Assets/style-var";
import { makeStyles } from '@material-ui/core/styles';

export const CarListWrapper= styled.div`
    display: inline-grid;
    margin-bottom: ${base_spacing}px;
`;

export const CityListWrapper= styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;


export const useStyles = makeStyles(theme => ({
    formControl: {
        margin: `0 ${base_spacing*1.5}px`,
        minWidth: 300,
        display: `flex`
    }
}));


export const FilterWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
`;

export const CityCard = styled.div`
    text-align: center;
    padding: 0 ${base_spacing * 1.5}px ${base_spacing}px ${base_spacing * 1.5}px;
    cursor: pointer;
    background: ${({enabled}) => enabled ? 'rgba(29, 160, 188, 0.7);' : 'transparent'};
    box-shadow: ${({enabled}) => enabled ? "0 1px 6px rgba(32, 33, 36, 0.28)" : "0px"};
    transform: ${({enabled}) => enabled ? "scale(1.05)": "scale(1.0)"};
    transition: all .5s ease-in-out;
    margin: 0 ${base_spacing}px;
    border-radius: 5px;
    position: relative;
    margin-top: ${base_spacing}px;
    padding-bottom: 20px;
    img {
        margin-bottom: ${base_spacing}px;
    }
`;

export const CityIcon = styled.p`
    font-size: 55px;
    color: ${({enabled}) => enabled ? `white` : `${font_color}`}
`;

export const CityName = styled.p`
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    color: ${({enabled}) => enabled ? `white` : `${font_color}`}
`;
export const SelectedCarIcon = styled.img`
    position: fixed;
    bottom: ${({bottomPosition}) => bottomPosition ? "50px" : "20px"};
    right: 20px;
    width: 60px;
    border-radius: 50%;
    background: ${ez_button_color};
    padding: ${base_spacing}px;
    cursor: pointer;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16);
    animation: scale-animation 250ms ease;
`;



export const SelectedCarCard = styled.div`
    ${CommonBoxShadow};
    background: ${ez_button_color};
    display: ${({visibility}) => visibility ? "" : "none"};
    position: absolute;
    bottom: ${base_spacing*6}px;
    right: ${base_spacing*8.5}px;
    padding: ${base_spacing}px;
    border-radius: ${base_spacing}px;
`;