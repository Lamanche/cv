import React from "react";
import styled from "styled-components";
import AboutMe from "./content/AboutMe";
import Education from "./content/Education";
import Experience from "./content/Experience";

const Wrapper = styled.div`
  width: 68%;
  height: 100%;
  box-sizing: border-box;
  padding 3.3rem 2rem 2.2rem 1.5rem;
  background-color: white;

  @media (max-width: 880px) {
    padding: 6.000vw 3.636vw 4vw 2.727vw;  
  }
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
