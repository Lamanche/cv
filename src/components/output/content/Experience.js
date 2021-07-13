import React from "react";
import styled from "styled-components";
import Headline from "./components/Headline";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const Experience = () => {
  return (
    <Wrapper>
      <Headline icon={<BusinessCenterIcon />} name='KOGEMUS'/>
    </Wrapper>
  );
};

export default Experience;
