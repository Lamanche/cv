import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
  TimelineOppositeContent,
} from "@material-ui/lab";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const TimeLine = styled(Timeline)`
  &.MuiTimeline-root {
    display: flex;
    padding: 0px 0px;
    margin: 2px;
    flex-grow: 1;
    flex-direction: column;
  }
`;

const LeftSide = styled(TimelineOppositeContent)`
  &.MuiTimelineOppositeContent-root {
    max-width: 10rem;
    padding: 0 0.5rem 0 0;
    text-align: left;
  }
`;

const RightSide = styled(TimelineContent)`
  &.MuiTimelineContent-root {
    padding: 0 0 0 0.5rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1rem;
  color: ${(props) => props.theme.darkPurple};

  @media (max-width: 880px) {
    font-size: 1.818vw;
  }
`;

const Title2 = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.darkPurple};

  @media (max-width: 880px) {
    font-size: 1.818vw;
  }
`;

const Year = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.darkPurple};

  @media (max-width: 880px) {
    font-size: 1.636vw;
    margin-top: 0.909vw;
  }
`;

const Description = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.4rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.darkPurple};

  @media (max-width: 880px) {
    font-size: 1.636vw;
    margin-top: 0.909vw;
    margin-bottom: 2.545vw;
  }
`;

const Dot = styled(TimelineDot)`
  &.MuiTimelineDot-root {
    display: flex;
    padding: 4px;
    align-self: baseline;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    margin-top: 2px;
    border-style: solid;
    border-width: 2px;
    border-radius: 50%;
    margin-bottom: 8px;
    background-color: ${(props) => props.theme.lightBlue};
  }
`;

const Line = styled(TimelineConnector)`
  &.MuiTimelineConnector-root {
    background-color: ${(props) => props.theme.lightBlue};
  }
`;

const TimelineData = ({ data }) => {
  return (
    <Wrapper>
      <TimeLine align='alternate'>
        <TimelineItem>
          <LeftSide>
            <Title>{data?.title}</Title>
            {data?.beginning && (
              <Year>
                {data?.beginning} - {data?.ending || "..."}
              </Year>
            )}
          </LeftSide>
          <TimelineSeparator>
            <Dot />
            <Line />
          </TimelineSeparator>
          <RightSide>
            <Title2>{data?.company}</Title2>
            <Description>{data?.description}</Description>
          </RightSide>
        </TimelineItem>
      </TimeLine>
    </Wrapper>
  );
};

export default TimelineData;
