import { Divider } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
`;

const Headline = styled.h1`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.54);

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

const Line = styled(Divider)`
  &.MuiDivider-root {
    margin-bottom: 1rem;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Headline>Koosta CV kiirelt ja lihtsalt</Headline>
      <Line />
    </Wrapper>
  );
};

export default Header;
