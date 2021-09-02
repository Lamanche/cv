import { Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";
import AddEducation from "./components/AddEducation";
import uniqid from "uniqid";

const Wrapper = styled.div`
  text-align: center;
`;

const Name = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.darkPurple};
`;

const AddBtn = styled(Fab)`
  margin-bottom: 1rem !important;

  &.MuiFab-primary {
    color: #fff;
    background-color: ${(props) => props.theme.green};
  }

  &.MuiFab-primary:hover {
    background-color: #76c903;
  }
`;

const Education = () => {
  const [userData, setUserData] = useContext(DataContext);

  const addEducation = () => {
    setUserData((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uniqid(),
          school: "",
          beginning: null,
          ending: null,
          degree: "",
          info: "",
        },
      ],
    }));
  };

  return (
    <Wrapper>
      <Name>HARIDUS</Name>
      {userData.education.map((ex, index) => {
        return (
          <AddEducation
            key={ex.id}
            index={index}
            userData={userData}
            setUserData={setUserData}
          />
        );
      })}
      <Tooltip title='Lisa kool'>
        <AddBtn onClick={addEducation} color='primary' aria-label='add'>
          <AddIcon />
        </AddBtn>
      </Tooltip>
    </Wrapper>
  );
};

export default Education;
