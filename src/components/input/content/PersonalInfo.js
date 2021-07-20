import { TextField } from "@material-ui/core";
import React, { useContext } from "react";
//import { useForm } from "react-hook-form";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";

const Wrapper = styled.div``;

const InputField = styled(TextField)`
  margin-bottom: 0.8rem !important;

  & .MuiOutlinedInput-input {
    padding: 8px 8px;
  }

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: green;
    border-width: 2px;
  }

  & .MuiInputLabel-outlined {
    transform: translate(14px, 10px) scale(1);
  }

  & .MuiFormLabel-root.Mui-focused {
    color: green;
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

  return (
    <Wrapper>
      <form>
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
