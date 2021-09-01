import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 880px) {
    margin-bottom: 3.636vw;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  //height: 14rem;
  margin-bottom: 1.5rem;

  @media (max-width: 880px) {
    margin-bottom: 2.727vw;
  }
`;

const Image = styled.img`
  //height: 100%;
  max-height: 14rem;
  min-width: 100%;
  max-width: 100%;
  object-fit: cover;

  @media (max-width: 880px) {
    max-height: 25.455vw;
  }
`;

const Name = styled.h1`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 0;
  margin-top: 0;
  color: white;
  font-size: 2.4rem;

  @media (max-width: 880px) {
    font-size: 4.364vw;
    margin-left: 3.636vw;
    margin-right: 3.636vw;
  }
`;

const JobTitle = styled.p`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  color: ${(props) => props.theme.lightBlue};

  @media (max-width: 880px) {
    font-size: 1.818vw;
    margin-left: 3.636vw;
    margin-right: 3.636vw;
    margin-top: 0.909vw;
  }
`;

const Header = ({ data }) => {
  return (
    <Wrapper style={{ paddingTop: data.personal.image === "" && "2rem" }}>
      {data.personal.image !== "" && (
        <ImageContainer>
          <Image src={data?.personal.image} alt='profile-pic'></Image>
        </ImageContainer>
      )}
      <Name>{data?.personal.name}</Name>
      <JobTitle>{data?.personal.occupation}</JobTitle>
    </Wrapper>
  );
};

export default Header;
