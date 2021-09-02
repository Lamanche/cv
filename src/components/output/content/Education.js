import React, { useContext } from "react";
import styled from "styled-components";
import Headline from "./components/Headline";
import SchoolIcon from "@material-ui/icons/School";
import { DataContext } from "../../../context/DataContext";
import EducationData from "./components/EducationData";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 880px) {
    margin-bottom: 3.636vw;
  }
`;

const Icon = styled(SchoolIcon)`
  @media (max-width: 880px) {
    &.MuiSvgIcon-root {
      font-size: 2.727vw;
    }
  }
`;

const Education = () => {
  const [userData] = useContext(DataContext);

  return (
    <Wrapper>
      <Headline icon={<Icon />} name='HARIDUS' />
      {userData.education.map((job, index) => (
        <EducationData key={job.id} data={job} index={index} />
      ))}
    </Wrapper>
  );
};

export default Education;
