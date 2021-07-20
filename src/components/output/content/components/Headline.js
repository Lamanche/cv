import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 0.5rem;
`;

const NameWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid green;
`;

const Name = styled.h1`
  font-size: 0.95rem;
  margin: 0;
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
