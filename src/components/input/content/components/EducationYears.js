import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import styled from "styled-components";

const Wrapper = styled.div``;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.8rem;
  row-gap: 0.8rem;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Picker = styled(MuiPickersUtilsProvider)`
  &.MuiPickersToolbar-toolbar {
    background-color: ${(props) => props.theme.green};
  }
`;

const DateInput = styled(KeyboardDatePicker)`
  margin-bottom: 0.8rem !important;

  & .MuiOutlinedInput-input {
    padding: 8px 8px;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.green};
    border-width: 2px;
  }

  & .MuiInputLabel-outlined {
    transform: translate(14px, 10px) scale(1);
  }

  & .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.darkPurple};
  }

  & .MuiOutlinedInput-adornedEnd {
    padding-right: 0;
  }
`;

const Years = ({ index, userData, setUserData }) => {
  const [selectedDate, setSelectedDate] = useState({
    beginning: null,
    ending: null,
  });

  const handleBeginning = (date) => {
    setSelectedDate((prevState) => ({ ...prevState, beginning: date }));
    const list = [...userData.education];
    list[index].beginning = date?.toLocaleDateString();
    setUserData((prevState) => ({
      ...prevState,
      education: list,
    }));
  };

  const handleEnding = (date) => {
    setSelectedDate((prevState) => ({ ...prevState, ending: date }));
    const list = [...userData.education];
    list[index].ending = date?.toLocaleDateString() || "...";
    setUserData((prevState) => ({
      ...prevState,
      education: list,
    }));
  };

  return (
    <Wrapper>
      <Picker utils={DateFnsUtils}>
        <InputContainer>
          <DateInput
            //disableToolbar
            variant='inline'
            inputVariant='outlined'
            disableFuture={true}
            format='dd.MM.yyyy'
            margin='normal'
            label='Algus'
            name='beginning'
            value={selectedDate.beginning}
            onChange={(e) => handleBeginning(e, index)}
          />
          <DateInput
            //disableToolbar
            variant='inline'
            inputVariant='outlined'
            disableFuture={true}
            format='dd.MM.yyyy'
            margin='normal'
            label='Lõpp'
            name='ending'
            value={selectedDate.ending}
            onChange={(e) => handleEnding(e, index)}
          />
        </InputContainer>
      </Picker>
    </Wrapper>
  );
};

export default Years;
