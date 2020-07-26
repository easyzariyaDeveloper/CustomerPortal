import styled from "styled-components";
import { base_spacing, EZFontMediumSize, ez_button_color, white_color } from "../../../../Assets/style-var";
import { makeStyles } from '@material-ui/core/styles';



export const CarListWrapper= styled.div`
    display: inline-grid;
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
    background: ${({enabled}) => enabled ? ez_button_color : white_color};
`;


