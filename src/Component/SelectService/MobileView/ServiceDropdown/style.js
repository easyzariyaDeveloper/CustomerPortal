import styled from "styled-components";
import { base_spacing, font_color, ez_button_color} from "../../../../Assets/style-var";
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
