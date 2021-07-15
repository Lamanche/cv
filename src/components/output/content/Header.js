import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 10rem;
  margin-bottom: 1.5rem;
`;

const Name = styled.h1`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 0;
  margin-top: 0;
  color: white;
`;

const JobTitle = styled.p`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const Header = () => {
  return (
    <Wrapper>
      <Image src='' alt='profile-pic'></Image>
      <Name>ANDRES SIIRAK</Name>
      <JobTitle>Web developer and design</JobTitle>
    </Wrapper>
  );
};

export default Header;
