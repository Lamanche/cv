import { TextField } from "@material-ui/core";
import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const InputField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background: whitesmoke;
  }

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
        fullWidth
      />
    </Wrapper>
  );
};

export default AboutMe;
