import React from "react";
//import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import styled from "styled-components";

const Wrapper = styled.div``;

const DateInput = styled(KeyboardDatePicker)`
  margin-bottom: 0.8rem !important;

  & .MuiOutlinedInput-input {
    padding: 8px 8px;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: green;
    border-width: 2px;
  }

  & .MuiInputLabel-outlined {
    transform: translate(14px, 10px) scale(1);
  }

  & .MuiFormLabel-root.Mui-focused {
    color: green;
  }

  & .MuiOutlinedInput-adornedEnd {
    padding-right: 0;
}
`;

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
        <DateInput
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
