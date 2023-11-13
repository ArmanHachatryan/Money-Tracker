import React, { useState } from "react";
import axios from "axios";
import css from "../../styles/form.css";
import { useNavigate } from "react-router-dom";

const { FormContainer, Button, Input, Span, H1 } = css;

const defaultFormData = {
  email: "",
  password: "",
};

const LogIn = (props) => {

  const {setAuth} = props;

  const navigate = useNavigate();
  const [formData, setFormData] = useState(defaultFormData);
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44357/api/Home/logIn",
        formData
      );

      var jsonData = JSON.stringify(response.data);
      sessionStorage.setItem("myAccessData", jsonData);
      setFormData(defaultFormData);
      navigate("/main");
      setAuth(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <FormContainer>
        <H1>Авторизация</H1>
        {error ? <Span>Ой, пароль или логин были неверны</Span> : <></>}

        <Input
          value={formData.email}
          type={"email"}
          id={"email"}
          onChange={onChange}
          placeholder="Ваш email для входа"
        />

        <Input
          value={formData.password}
          placeholder="Ваш пароль для входа"
          type={"password"}
          id={"password"}
          onChange={onChange}
        />
        <Button onClick={onSubmit}>Войти</Button>
      </FormContainer>
    </>
  );
};

export default LogIn;
