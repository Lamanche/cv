import { Divider } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AboutMe from "./content/AboutMe";
import Experience from "./content/Experience";
import PersonalInfo from "./content/PersonalInfo";

const Wrapper = styled.div`
  margin-right: 3rem;
`;

const Line = styled(Divider)`
  &.MuiDivider-root {
    margin-bottom: 1rem;
  }
`;

const Input = () => {
  return (
    <Wrapper>
      <PersonalInfo />
      <Line />
      <AboutMe />
      <Line />
      <Experience />
    </Wrapper>
  );
};

export default Input;
