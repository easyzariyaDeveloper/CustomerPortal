import styled from "styled-components";
import { base_spacing, EZFontMediumSize } from "../../../../Assets/style-var";
import { makeStyles } from '@material-ui/core/styles';



export const CarListWrapper= styled.div`
    display: inline-grid;
`;

export const CityListWrapper= styled.div`
    align-self: end;
`;


export const useStyles = makeStyles(() => ({
    formControl: {
      width: 120,
      float:"left"
    }
}));


export const FilterWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
`;
