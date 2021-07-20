import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataContext";
import Contact from "./content/Contact";
import Header from "./content/Header";

const Wrapper = styled.div`
  width: 32%;
  height: 100%;
  box-sizing: border-box;
  background-color: gray;
`;

const OutputLeft = () => {
  const [userData] = useContext(DataContext);

  return (
    <Wrapper>
      <Header data={userData} />
      <Contact data={userData} />
    </Wrapper>
  );
};

export default OutputLeft;
