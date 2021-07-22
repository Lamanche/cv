import { IconButton, TextField } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useContext } from "react";
//import { useForm } from "react-hook-form";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";

const Wrapper = styled.div``;

const ImageContainer = styled.div``;

const InputField = styled(TextField)`
  margin-bottom: 0.8rem !important;
  margin-right: .8rem !important;

  & .MuiOutlinedInput-input {
    padding: 8px 8px;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.green};
    border-width: 2px;
  }

  & .MuiInputLabel-outlined {
    transform: translate(14px, 10px) scale(1);
  }

  & .MuiFormLabel-root.Mui-focused {
    color: ${props => props.theme.darkPurple};
  }
`;

const PersonalInfo = () => {
  const [userData, setUserData] = useContext(DataContext);

  /*const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();*/

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      personal: { ...prevState.personal, [e.target.name]: e.target.value },
    }));
    //console.log(errors?.name)
  };

  const uploadImage = (e) => {
    //if (e.target.files && e.target.files[0]) {
    setUserData((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        image: URL.createObjectURL(e.target.files[0]),
      },
    }));
    e.target.value = null
    //}
  };

  const deleteImage = () => {
    setUserData((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        image: "",
      },
    }));
  };

  return (
    <Wrapper>
      <form>
        <ImageContainer>
          <input
            accept='image/*'
            style={{ display: "none" }}
            id='icon-button-file'
            type='file'
            onChange={uploadImage}
          />
          <label htmlFor='icon-button-file'>
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <PhotoCamera />
            </IconButton>
          </label>

          <IconButton onClick={deleteImage} aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        </ImageContainer>
        <InputField
          label='Nimi'
          name='name'
          variant='outlined'
          onChange={handleChange}

          //{...register("name", { maxLength: 2 })}
          //ref={register({ required: true })}
          //error={errors.length >1 && true}
          //helperText={errors?.name?.message}
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
      </form>
    </Wrapper>
  );
};

export default PersonalInfo;
