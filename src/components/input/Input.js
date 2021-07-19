import React from "react";
import styled from "styled-components";
import AboutMe from "./content/AboutMe";
import PersonalInfo from "./content/PersonalInfo";

const Wrapper = styled.div`
  margin-right: 3rem;
`;

const Input = () => {
  return (
    <Wrapper>
      <PersonalInfo />
      <AboutMe />
    </Wrapper>
  );
};

export default Input;
