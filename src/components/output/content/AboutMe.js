import React from "react";
import styled from "styled-components";
import Headline from "./components/Headline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const AboutMe = () => {
  return (
    <Wrapper>
      <Headline icon={<AccountCircleIcon />} name='MINUST' />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
        repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
        eaque?
      </p>
    </Wrapper>
  );
};

export default AboutMe;
