import { Divider } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AboutMe from "./content/AboutMe";
import Experience from "./content/Experience";
import PersonalInfo from "./content/PersonalInfo";

const Wrapper = styled.div`
  min-width: 220px;
  width: 100%;
  margin-right: 3rem;

  @media (max-width: 2560px) {
    max-width: 50rem;
    margin-right: 0;
  }

  @media (max-width: 1960px) {
    max-width: 45rem;
    margin-right: 3rem;
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Line = styled(Divider)`
  &.MuiDivider-root {
    margin-bottom: 1rem;
    height: 2px;
    background-color: ${(props) => props.theme.lightBlue};
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
