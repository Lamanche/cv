import {
  Button,
  Collapse,
  Divider,
  IconButton,
  TextField,
  Tooltip,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Years from "./Years";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const PreviewWrapper = styled.div``;

const PreviewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.darkPurple};
`;

const PreviewTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  min-width: 220px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.8rem;
  row-gap: 0.8rem;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const InputField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background: whitesmoke;
  }

  & .MuiOutlinedInput-multiline {
    padding: 10px 14px;
  }

  & .MuiOutlinedInput-input {
    padding: 8px 8px;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.green};
    border-width: 2px;
  }

  & .MuiInputLabel-outlined {
    transform: translate(14px, 10px) scale(1);
  }

  & .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.darkPurple};
  }
`;

const Line = styled(Divider)`
  &.MuiDivider-root {
    margin-bottom: 1rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RemoveBtn = styled(Button)`
  margin-top: 0.8rem !important;
  margin-bottom: 1rem !important;
`;

const AddExperience = ({ index, userData, setUserData }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("...");
  const collapsedRef = useRef();
  const expandedRef = useRef();

  useEffect(() => {
    expandedRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  const handleChange = (e, index) => {
    const list = [...userData.experience];
    e.target.name === "title" && setTitle(e.target.value);
    list[index][e.target.name] = e.target.value;
    setUserData((prevState) => ({
      ...prevState,
      experience: list,
    }));
  };

  const removeExperience = (index) => {
    const list = [...userData.experience];
    list.splice(index, 1);
    setUserData((prevState) => ({
      ...prevState,
      experience: list,
    }));
  };

  const collapse = () => {
    setIsOpen(false);
    collapsedRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const expand = () => {
    setIsOpen(true);
    expandedRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <Collapse in={!isOpen}>
        <PreviewWrapper>
          <PreviewContainer>
            <PreviewTitle ref={collapsedRef}>{title}</PreviewTitle>
            <Tooltip title='Ava'>
              <IconButton onClick={expand}>
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          </PreviewContainer>
          <Line />
        </PreviewWrapper>
      </Collapse>

      <Collapse in={isOpen}>
        <Wrapper ref={expandedRef}>
          <InputContainer>
            <InputField
              label='Amet'
              name='title'
              variant='outlined'
              onChange={(e) => handleChange(e, index)}
            />
            <InputField
              label='Ettevõte'
              name='company'
              variant='outlined'
              onChange={(e) => handleChange(e, index)}
            />
          </InputContainer>
          <Years index={index} userData={userData} setUserData={setUserData} />
          <InputField
            label='Kirjeldus'
            name='description'
            variant='outlined'
            onChange={(e) => handleChange(e, index)}
            multiline
            rows={5}
            fullWidth
          />

          <BtnContainer>
            <RemoveBtn
              variant='contained'
              color='secondary'
              onClick={() => removeExperience(index)}
            >
              Kustuta
            </RemoveBtn>
            <Tooltip title='Sulge'>
              <IconButton onClick={collapse}>
                <ExpandLessIcon />
              </IconButton>
            </Tooltip>
          </BtnContainer>
          <Line />
        </Wrapper>
      </Collapse>
    </>
  );
};

export default AddExperience;
