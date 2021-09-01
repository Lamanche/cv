import { Divider } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 2rem;
  margin-bottom: 2rem;

  @media (max-width: 880px) {
    padding: 0 3.636vw;
    margin-bottom: 3.636vw;
  }
`;

const Headline = styled.h1`
  margin-bottom: 0.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 880px) {
    font-size: 1.818vw;
    margin-bottom: 0.909vw;
  }
`;

const Line = styled(Divider)`
  &.MuiDivider-root {
    height: 2px;
    background-color: ${(props) => props.theme.lightBlue};
  }
`;

const Name = styled.h2`
  margin-bottom: 0.3rem;
  color: white;
  font-size: 0.9rem;

  @media (max-width: 880px) {
    font-size: 1.636vw;
    margin-bottom: 0.545vw;
  }
`;

const Info = styled.p`
  margin-top: 0;
  color: white;
  font-size: 0.9rem;
  font-weight: 300;

  @media (max-width: 880px) {
    font-size: 1.636vw;
  }
`;

const Contact = ({ data }) => {
  return (
    <Wrapper>
      <Headline>KONTAKT</Headline>
      <Line />
      <Name>Aadress</Name>
      <Info>{data.personal.address}</Info>
      <Name>Telefon</Name>
      <Info>{data.personal.phone}</Info>
      <Name>E-mail</Name>
      <Info>{data.personal.email}</Info>
    </Wrapper>
  );
};

export default Contact;
