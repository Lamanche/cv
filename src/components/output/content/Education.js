import React from "react";
import styled from "styled-components";
import Headline from "./components/Headline";
import SchoolIcon from "@material-ui/icons/School";
import TimelineData from "./components/TimelineData";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const Education = () => {
  return (
    <Wrapper>
      <Headline icon={<SchoolIcon />} name='HARIDUS' />
      <TimelineData />
      <TimelineData />
    </Wrapper>
  );
};

export default Education;
