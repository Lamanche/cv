import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 14rem;
  margin-bottom: 1.5rem;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Name = styled.h1`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 0;
  margin-top: 0;
  color: white;
  font-size: 2.4rem;
`;

const JobTitle = styled.p`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  color: ${props => props.theme.lightBlue};
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
