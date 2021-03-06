import styled from "styled-components";
import {
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { base_spacing, disabled_button_bg_color } from "../../../Assets/style-var";


export const DateStyling = styled(KeyboardDatePicker)`
    margin-right: ${base_spacing * 3}px !important;

    .MuiInputBase-input{
        color: ${disabled_button_bg_color};
    }
`;

export const TimeStyling = styled(KeyboardTimePicker)`
    margin-top:20px;

    .MuiInputBase-input{
        color: ${disabled_button_bg_color}
    }
`;


