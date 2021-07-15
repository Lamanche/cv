import React from "react";
import styled from "styled-components";
import PersonalInfo from "./content/PersonalInfo";

const Wrapper = styled.div`
margin-right: 3rem;`;

const Input = () => {
  return <Wrapper>
      <PersonalInfo />
  </Wrapper>;
};

export default Input;
