import styled from "styled-components";
import React, { useContext } from "react";
import AddLanguage from "./components/AddLanguage";
import { Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { DataContext } from "../../../context/DataContext";
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

const Languages = () => {
  const [userData, setUserData] = useContext(DataContext);

  const addLanguage = () => {
    setUserData((prevState) => ({
      ...prevState,
      languages: [
        ...prevState.languages,
        {
          id: uniqid(),
          language: "",
          level: "",
        },
      ],
    }));
  };

  return (
    <Wrapper>
      <Name>KEELED</Name>
      {userData.languages.map((ex, index) => {
        return (
          <AddLanguage
            key={ex.id}
            index={index}
            userData={userData}
            setUserData={setUserData}
          />
        );
      })}

      <Tooltip title='Lisa keel'>
        <AddBtn onClick={addLanguage} color='primary' aria-label='add'>
          <AddIcon />
        </AddBtn>
      </Tooltip>
    </Wrapper>
  );
};

export default Languages;
