import { Card } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import OutputLeft from "./OutputLeft";
import OutputRight from "./OutputRight";

const Wrapper = styled.div`
  width: 21cm;
  height: 29.7cm;
`;

const PaperBg = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Output = () => {
  return (
    <Wrapper>
      <PaperBg elevation={5}>
        <OutputLeft />
        <OutputRight />
      </PaperBg>
    </Wrapper>
  );
};

export default Output;
