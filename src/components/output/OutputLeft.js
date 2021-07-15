import React from "react";
import styled from "styled-components";
import Header from "./content/Header";

const Wrapper = styled.div`
  width: 32%;
  height: 100%;
  box-sizing: border-box;
  background-color: gray;
`;

const OutputLeft = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default OutputLeft;
