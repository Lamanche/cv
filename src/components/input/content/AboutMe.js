import { TextField } from "@material-ui/core";
import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const InputField = styled(TextField)`
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.green};
    border-width: 2px;
  }

  & .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.darkPurple};
  }

  & .MuiInputBase-input:focus {
    background-color: white;
  }
`;

const AboutMe = () => {
  const [userData, setUserData] = useContext(DataContext);

  const handleChange = (e) => {
    setUserData((prevState) => ({ ...prevState, about: e.target.value }));
  };

  return (
    <Wrapper>
      <InputField
        label='Iseloomustus'
        name='about'
        variant='outlined'
        onChange={handleChange}
        multiline
        rows={4}
      />
    </Wrapper>
  );
};

export default AboutMe;
