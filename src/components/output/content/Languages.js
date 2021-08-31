import { Divider } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

const Headline = styled.h1`
  margin-bottom: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;

const Line = styled(Divider)`
  &.MuiDivider-root {
    height: 2px;
    margin-bottom: 0.74rem;
    background-color: ${(props) => props.theme.lightBlue};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Language = styled.p`
  margin-top: 0;
  color: white;
  font-size: 0.9rem;
  font-weight: 300;
`;

const Rating = styled.p`
  margin-top: 0;
  color: white;
  font-size: 0.9rem;
`;

const Languages = ({ data }) => {
  return (
    <Wrapper>
      <Headline>KEELED</Headline>
      <Line />
      {data.languages.map((language) => {
        return (
          <Container>
            <Language>{language.language}</Language>
            <Rating>{language.level}</Rating>
          </Container>
        );
      })}
    </Wrapper>
  );
};

export default Languages;
