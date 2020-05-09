import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DatePicker,
  TimePicker
} from '@material-ui/pickers';


import {DateStyling,TimeStyling} from "./style";

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateStyling 
            margin="normal"
            value={selectedDate} 
            format="d MMM yyyy"
            onChange={handleDateChange}
            id="date-picker-inline"
            label="Select Date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            minDate = {new Date()}
        />
        
        <TimeStyling
          margin="normal"
          id="time-picker"
          label="Time Slot"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        /> 
    </MuiPickersUtilsProvider>
  );
}