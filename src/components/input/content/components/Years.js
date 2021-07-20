import React from "react";
//import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import styled from "styled-components";

const Wrapper = styled.div``;

const Years = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date()
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Wrapper>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          //disableToolbar
          variant='inline'
          inputVariant='outlined'
          disableFuture={true}
          format='dd/MM/yyyy'
          margin='normal'
          label='Algus'
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
    </Wrapper>
  );
};

export default Years;
