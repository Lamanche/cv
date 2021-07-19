import React, { useContext } from "react";
import styled from "styled-components";
import Headline from "./components/Headline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { DataContext } from "../../../context/DataContext";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const AboutMe = () => {
const [userData] = useContext(DataContext)

  return (
    <Wrapper>
      <Headline icon={<AccountCircleIcon />} name='MINUST' />
      <p>
        {userData.about}
      </p>
    </Wrapper>
  );
};

export default AboutMe;
