import {
  Button,
  Collapse,
  Divider,
  IconButton,
  TextField,
  Tooltip,
} from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import EducationYears from "./EducationYears";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

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

const AddEducation = ({ index, userData, setUserData }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("...");

  const handleChange = (e, index) => {
    const list = [...userData.education];
    e.target.name === "school" && setTitle(e.target.value);
    list[index][e.target.name] = e.target.value;
    setUserData((prevState) => ({
      ...prevState,
      education: list,
    }));
  };

  const removeEducation = (index) => {
    const list = [...userData.education];
    list.splice(index, 1);
    setUserData((prevState) => ({
      ...prevState,
      education: list,
    }));
  };

  const collapse = () => {
    setIsOpen(false);
  };

  const expand = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Collapse in={!isOpen}>
        <PreviewWrapper>
          <PreviewContainer>
            <PreviewTitle>{title}</PreviewTitle>
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
        <Wrapper>
          <InputContainer>
            <InputField
              label='Kool'
              name='school'
              variant='outlined'
              onChange={(e) => handleChange(e, index)}
            />
            <InputField
              label='Kraad'
              name='degree'
              variant='outlined'
              onChange={(e) => handleChange(e, index)}
            />
          </InputContainer>
          <EducationYears
            index={index}
            userData={userData}
            setUserData={setUserData}
          />
          <BtnContainer>
            <RemoveBtn
              variant='contained'
              color='secondary'
              onClick={() => removeEducation(index)}
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

export default AddEducation;
