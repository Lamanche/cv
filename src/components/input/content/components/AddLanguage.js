import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import React, { useEffect, useRef } from "react";

const Wrapper = styled.div`
  margin-bottom: 0.8rem;
  margin-top: -0.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.8rem;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const SelectForm = styled(FormControl)`
  width: 100%;

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

const AddLanguage = ({ index, userData, setUserData }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  const handleChange = (e, index) => {
    const list = [...userData.languages];
    list[index][e.target.name] = e.target.value;
    setUserData((prevState) => ({
      ...prevState,
      languages: list,
    }));
  };

  const removeLanguage = (index) => {
    const list = [...userData.languages];
    list.splice(index, 1);
    setUserData((prevState) => ({
      ...prevState,
      languages: list,
    }));
  };

  return (
    <Wrapper ref={ref}>
      <InputField
        label='Keel'
        name='language'
        variant='outlined'
        onChange={(e) => handleChange(e, index)}
      />
      <Container>
        <SelectForm variant='outlined'>
          <InputLabel id='level'>Tase</InputLabel>
          <Select
            labelId='level'
            id='demo-simple-select-outlined'
            name='level'
            onChange={(e) => handleChange(e, index)}
            label='Level'
          >
            <MenuItem value={"Emakeel"}>Emakeel</MenuItem>
            <MenuItem value={"Algaja"}>Algaja</MenuItem>
            <MenuItem value={"Keskmine"}>Keskmine</MenuItem>
            <MenuItem value={"Hea"}>Hea</MenuItem>
            <MenuItem value={"Väga hea"}>Väga hea</MenuItem>
          </Select>
        </SelectForm>
        <Tooltip title='Kustuta'>
          <IconButton onClick={() => removeLanguage(index)}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </Container>
    </Wrapper>
  );
};

export default AddLanguage;
