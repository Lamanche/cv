import { Button, Divider, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Years from "./Years";

const Wrapper = styled.div`
  min-width: 220px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.8rem;
  row-gap: 0.8rem;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1236px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InputField = styled(TextField)`
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
`;

const Line = styled(Divider)`
  &.MuiDivider-root {
    margin-bottom: 1rem;
  }
`;

const RemoveBtn = styled(Button)`
  margin-top: 0.8rem !important;
  margin-bottom: 1rem !important;
`;

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
      <InputContainer>
        <InputField
          label='Amet'
          name='title'
          variant='outlined'
          onChange={(e) => handleChange(e, index)}
        />
        <InputField
          label='Ettevõte'
          name='company'
          variant='outlined'
          onChange={(e) => handleChange(e, index)}
        />
      </InputContainer>
      <Years index={index} userData={userData} setUserData={setUserData} />
      <InputField
        label='Kirjeldus'
        name='description'
        variant='outlined'
        onChange={(e) => handleChange(e, index)}
        multiline
        rows={4}
        fullWidth
      />
      <RemoveBtn
        variant='contained'
        color='secondary'
        onClick={() => removeExperience(index)}
      >
        Kustuta
      </RemoveBtn>
      <Line />
    </Wrapper>
  );
};

export default AddExperience;
