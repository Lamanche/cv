import React, { useContext } from "react";
import styled from "styled-components";
import Headline from "./components/Headline";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { DataContext } from "../../../context/DataContext";
import TimelineData from "./components/TimelineData";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 880px) {
    margin-bottom: 3.636vw;
  }
`;

const Icon = styled(BusinessCenterIcon)`
  @media (max-width: 880px) {
    &.MuiSvgIcon-root {
      font-size: 2.727vw;
    }
  }
`;

const Experience = () => {
  const [userData] = useContext(DataContext);

  return (
    <Wrapper>
      <Headline icon={<Icon />} name='KOGEMUS' />
      {userData.experience.map((job, index) => (
        <TimelineData key={job.id} data={job} index={index} />
      ))}
    </Wrapper>
  );
};

export default Experience;
