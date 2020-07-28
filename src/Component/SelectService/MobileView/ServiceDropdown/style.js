import styled from "styled-components";
import { base_spacing, EZFontMediumSize, ez_button_color, white_color } from "../../../../Assets/style-var";
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
    text-align: centre;
    padding: ${base_spacing}px;
    cursor: pointer;
    background: ${({enabled}) => enabled ? 'white' : 'transparent'};
    box-shadow: ${({enabled}) => enabled ? "0 1px 6px rgba(32, 33, 36, 0.28)" : "0px"};
    transform: ${({enabled}) => enabled ? "scale(1.05)": "scale(1.0)"};
    transition: all .5s ease-in-out;
    margin-bottom: ${base_spacing * 1.5}px;

    img {
        margin-bottom: ${base_spacing}px;
    }
`;


