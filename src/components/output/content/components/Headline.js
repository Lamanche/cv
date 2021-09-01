import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 880px) {
    margin-bottom: 1.818vw;
  }
`;

const Icon = styled.div`
  margin-right: 0.5rem;
`;

const NameWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.lightBlue};
`;

const Name = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: ${(props) => props.theme.darkPurple};

  @media (max-width: 880px) {
    font-size: 1.818vw;
  }
`;

const Headline = ({ icon, name }) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <NameWrapper>
        <Name>{name}</Name>
      </NameWrapper>
    </Wrapper>
  );
};

export default Headline;
