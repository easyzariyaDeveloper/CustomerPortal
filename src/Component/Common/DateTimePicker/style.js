import styled from "styled-components";
import {
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { base_spacing, disabled_button_bg_color } from "../../../Assets/style-var";


export const DateStyling = styled(KeyboardDatePicker)`
    width: 150px;

    .MuiInputBase-input{
        color: ${disabled_button_bg_color};
    }
`;

export const TimeStyling = styled(KeyboardTimePicker)`
    margin-top:20px;
    width: 150px;

    .MuiInputBase-input{
        color: black;
    }
    

`;

// .MuiIconButton-label{
    //     display: none;
    // }


