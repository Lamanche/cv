import { Card } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import OutputLeft from "./OutputLeft";
import OutputRight from "./OutputRight";

const Wrapper = styled.div`
  min-width: 21cm;
  height: 29.7cm;

  @media (max-width: 880px) {
    min-width: 8cm;
    width: 100%;
    height: 127.559vw;
  }
`;

const PaperBg = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Output = () => {
  return (
    <Wrapper id='divToPrint'>
      <PaperBg elevation={5}>
        <OutputLeft />
        <OutputRight />
      </PaperBg>
    </Wrapper>
  );
};

export default Output;
