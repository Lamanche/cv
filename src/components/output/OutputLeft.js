import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataContext";
import Contact from "./content/Contact";
import Header from "./content/Header";
import Languages from "./content/Languages";

const Wrapper = styled.div`
  width: 32%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.darkPurple};
`;

const OutputLeft = () => {
  const [userData] = useContext(DataContext);

  return (
    <Wrapper>
      <Header data={userData} />
      <Contact data={userData} />
      <Languages data={userData} />
    </Wrapper>
  );
};

export default OutputLeft;
