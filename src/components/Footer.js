import { Divider } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Disclaimer = styled.p`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.54);

  @media (max-width: 880px) {
    font-size: 1.818vw;
  }
`;

const Line = styled(Divider)`
  &.MuiDivider-root {
    margin-bottom: 1rem;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Line />
      <Disclaimer>See sait ei kogu ega salvesta kasutajate andmeid</Disclaimer>
    </Wrapper>
  );
};

export default Footer;
