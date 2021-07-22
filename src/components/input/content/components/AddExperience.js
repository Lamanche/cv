import { Button, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Years from "./Years";

const Wrapper = styled.div``;

const InputField = styled(TextField)`
  margin-bottom: 0.8rem !important;
  margin-right: .8rem !important;

  & .MuiOutlinedInput-input {
    padding: 8px 8px;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.green};
    border-width: 2px;
  }

  & .MuiInputLabel-outlined {
    transform: translate(14px, 10px) scale(1);
  }

  & .MuiFormLabel-root.Mui-focused {
    color: ${props => props.theme.darkPurple};
  }
`;

const RemoveBtn = styled(Button)``;

const AddExperience = ({ index, userData, setUserData }) => {
  
    const handleChange = (e, index) => {
    const list = [...userData.experience];
    list[index][e.target.name] = e.target.value;
    setUserData((prevState) => ({
      ...prevState,
      experience: list,
    }));
  };

  const removeExperience = (index) => {
    const list = [...userData.experience];
    list.splice(index, 1);
    setUserData((prevState) => ({
      ...prevState,
      experience: list,
    }));
  };

  return (
    <Wrapper>
      <InputField
        label='Amet'
        name='title'
        variant='outlined'
        onChange={(e) => handleChange(e, index)}
      />

      <Years />

      <InputField
        label='Aasta'
        name='year'
        variant='outlined'
        onChange={(e) => handleChange(e, index)}
      />
      <InputField
        label='Ettevõte'
        name='company'
        variant='outlined'
        onChange={(e) => handleChange(e, index)}
      />
      <InputField
        label='Kirjeldus'
        name='description'
        variant='outlined'
        onChange={(e) => handleChange(e, index)}
        multiline
        rows={4}
      />
      <RemoveBtn
        variant='contained'
        color='secondary'
        onClick={() => removeExperience(index)}
      >
        Kustuta
      </RemoveBtn>
    </Wrapper>
  );
};

export default AddExperience;
