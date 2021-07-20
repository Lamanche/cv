import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";
import AddExperience from "./components/AddExperience";

const Wrapper = styled.div`
  text-align: center;
`;

const AddBtn = styled(Fab)`

`

const Experience = () => {
  const [userData, setUserData] = useContext(DataContext);

  const addExperience = () => {
    setUserData((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          title: "",
          year: "",
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
            key={index}
            index={index}
            userData={userData}
            setUserData={setUserData}
          />
        );
      })}
      <AddBtn onClick={addExperience} color='primary' aria-label='add'>
        <AddIcon />
      </AddBtn>
    </Wrapper>
  );
};

export default Experience;
