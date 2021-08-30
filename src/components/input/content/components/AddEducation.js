import { Button, Divider, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import EducationYears from "./EducationYears";

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

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
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

const AddEducation = ({ index, userData, setUserData }) => {
  const handleChange = (e, index) => {
    const list = [...userData.education];
    list[index][e.target.name] = e.target.value;
    setUserData((prevState) => ({
      ...prevState,
      education: list,
    }));
  };

  const removeEducation = (index) => {
    const list = [...userData.education];
    list.splice(index, 1);
    setUserData((prevState) => ({
      ...prevState,
      education: list,
    }));
  };

  return (
    <Wrapper>
      <InputContainer>
        <InputField
          label='Kool'
          name='school'
          variant='outlined'
          onChange={(e) => handleChange(e, index)}
        />
        <InputField
          label='Kraad'
          name='degree'
          variant='outlined'
          onChange={(e) => handleChange(e, index)}
        />
      </InputContainer>
      <EducationYears index={index} userData={userData} setUserData={setUserData} />
      <RemoveBtn
        variant='contained'
        color='secondary'
        onClick={() => removeEducation(index)}
      >
        Kustuta
      </RemoveBtn>
      <Line />
    </Wrapper>
  );
};

export default AddEducation;
