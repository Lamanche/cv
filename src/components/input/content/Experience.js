import { Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";
import AddExperience from "./components/AddExperience";
import uniqid from "uniqid";

const Wrapper = styled.div`
  text-align: center;
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

const Experience = () => {
  const [userData, setUserData] = useContext(DataContext);

  const addExperience = () => {
    setUserData((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uniqid(),
          title: "",
          beginning: null,
          ending: null,
          company: "",
          description: "",
        },
      ],
    }));
  };

  return (
    <Wrapper>
      {userData.experience.map((ex, index) => {
        return (
          <AddExperience
            key={ex.id}
            index={index}
            userData={userData}
            setUserData={setUserData}
          />
        );
      })}
      <Tooltip title='Lisa kogemus'>
        <AddBtn onClick={addExperience} color='primary' aria-label='add'>
          <AddIcon />
        </AddBtn>
      </Tooltip>
    </Wrapper>
  );
};

export default Experience;
