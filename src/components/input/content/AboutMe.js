import { TextField } from "@material-ui/core";
import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";

const Wrapper = styled.div``;

const InputField = styled(TextField)``;

const AboutMe = () => {
  const [userData, setUserData] = useContext(DataContext);

  const handleChange = (e) => {
    setUserData((prevState) => ({ ...prevState, about: e.target.value }));
  };

  return (
    <Wrapper>
      <InputField
        label='Minust'
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
