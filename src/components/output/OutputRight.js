import React from "react";
import styled from "styled-components";
import AboutMe from "./content/AboutMe";
import Education from "./content/Education";
import Experience from "./content/Experience";

const Wrapper = styled.div`
  width: 68%;
  height: 100%;
  box-sizing: border-box;
  padding 2.2rem 1.5rem 2.2rem 1.5rem;

`;

const OutputRight = () => {
  return (
    <Wrapper>
      <AboutMe />
      <Experience />
      <Education />
    </Wrapper>
  );
};

export default OutputRight;
