import { TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const InputField = styled(TextField)``;

const PersonalInfo = () => {
  const handleChange = (e) => {
    console.log(e.target.name);
  };

  return (
    <Wrapper>
      <form>
        <InputField label='Nimi' name='name' variant='outlined' onChange={handleChange} />
        <InputField label='Amet' name='occupation' variant='outlined' onChange={handleChange} />
      </form>
    </Wrapper>
  );
};

export default PersonalInfo;
