import { Divider } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 2rem;
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
    background-color: green;
  }
`;

const Name = styled.h2`
  margin-bottom: 0.3rem;
  color: white;
  font-size: 0.9rem;
`;

const Info = styled.p`
  margin-top: 0;
  color: white;
  font-size: 0.9rem;
  font-weight: 300;
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
