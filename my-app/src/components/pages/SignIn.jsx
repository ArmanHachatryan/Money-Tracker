import React, {useState} from "react";
import axios from "axios";
import css from '../../styles/form.css'
import { useNavigate } from "react-router-dom";

const { FormContainer, Button, Input, Span, H1 } = css;

const defaultFormData = {
    email: "",
    password: "",
};

const SignIn = () => {

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
        await axios.post(
          "https://localhost:44357/api/Home/signIn", formData
        );

        setFormData(defaultFormData);
        navigate('/login');

      } catch (error) {
        setError(true);
      }
  

    };

    return (
        <>
          <FormContainer>
          <H1>Регистрация</H1>
          {error ? <Span>Ой, пользователь с таким Email уже есть</Span> : <></>}

            <Input
              value={formData.email}
              type={"email"}
              id={"email"}
              onChange={onChange}
              placeholder="Ваш email для регистрации"
            />

            <Input
              value={formData.password}
              placeholder="Ваш пароль для регистрации"
              type={"password"}
              id={"password"}
              onChange={onChange}
            />
            <Button onClick={onSubmit}>Зарегистрироваться</Button>
          </FormContainer>
        </>
    )
}

export default SignIn