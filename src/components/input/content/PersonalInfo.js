import { IconButton, TextField, Tooltip } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";

const Wrapper = styled.div`
  margin-bottom: 0.8rem;
`;

const ImageContainer = styled.div`
  margin-bottom: 0.8rem;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.8rem;
  row-gap: 0.8rem;

  @media (min-width: 1960px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

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

const PersonalInfo = () => {
  const [userData, setUserData] = useContext(DataContext);
  const [done, setDone] = useState(false);

  const showDone = () => {
    setDone(true);
    setTimeout(() => {
      setDone(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      personal: { ...prevState.personal, [e.target.name]: e.target.value },
    }));
  };

  const uploadImage = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        image: URL.createObjectURL(e.target.files[0]),
      },
    }));
    e.target.value = null;
  };

  const deleteImage = () => {
    setUserData((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        image: "",
      },
    }));
    userData.personal.image !== "" && showDone();
  };

  return (
    <Wrapper id='back-to-top-anchor'>
      <ImageContainer>
        <input
          accept='image/*'
          style={{ display: "none" }}
          id='icon-button-file'
          type='file'
          onChange={uploadImage}
        />
        <label htmlFor='icon-button-file'>
          <Tooltip title='Lisa pilt'>
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <PhotoCamera />
            </IconButton>
          </Tooltip>
        </label>
        <Tooltip title='Kustuta pilt'>
          <IconButton onClick={deleteImage} aria-label='delete'>
            {done ? <DoneIcon /> : <DeleteIcon />}
          </IconButton>
        </Tooltip>
      </ImageContainer>
      <InputContainer>
        <InputField
          label='Nimi'
          name='name'
          variant='outlined'
          onChange={handleChange}
        />
        <InputField
          label='Amet'
          name='occupation'
          variant='outlined'
          onChange={handleChange}
        />
        <InputField
          label='Aadress'
          name='address'
          variant='outlined'
          onChange={handleChange}
        />
        <InputField
          label='Telefon'
          name='phone'
          variant='outlined'
          onChange={handleChange}
        />
        <InputField
          label='E-mail'
          name='email'
          variant='outlined'
          onChange={handleChange}
        />
      </InputContainer>
    </Wrapper>
  );
};

export default PersonalInfo;
