import React, { useContext } from "react";
import styled from "styled-components";
import Headline from "./components/Headline";
import SchoolIcon from "@material-ui/icons/School";
import { DataContext } from "../../../context/DataContext";
import EducationData from "./components/EducationData";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const Education = () => {
  const [userData] = useContext(DataContext);
  
  return (
    <Wrapper>
      <Headline icon={<SchoolIcon />} name='HARIDUS' />
      {userData.education.map((job, index) => (
        <EducationData key={job.id} data={job} index={index} />
      ))}
    </Wrapper>
  );
};

export default Education;
