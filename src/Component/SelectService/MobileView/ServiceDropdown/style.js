import styled from "styled-components";
import { base_spacing, EZFontMediumSize } from "../../../../Assets/style-var";
import { makeStyles } from '@material-ui/core/styles';



export const CarListWrapper= styled.div`
    position:relative;
`;

export const CityListWrapper= styled.div`
    position:absolute;
    right: ${base_spacing*3}px;
    top: ${base_spacing*10.5}px;
`;


export const SwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.label`
    display: inline-block;
    margin: 0 ${base_spacing}px;
    font-size: ${EZFontMediumSize }
`;

export const useStyles = makeStyles(() => ({
    formControl: {
      width: 120,
    }
}));

