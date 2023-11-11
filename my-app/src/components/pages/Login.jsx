import React, {useState} from "react";
import axios from "axios";
import css from '../../styles/form.css'
import { useNavigate } from "react-router-dom";

const { FormContainer, Button, Input, Span } = css;

const defaultFormData = {
    email: "",
    password: "",
};

const LogIn= () => {

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
          "https://localhost:44357/api/Home/logIn", formData
        );
        
        var jsonData = JSON.stringify(response.data);
        sessionStorage.setItem('myAccessData', jsonData);

        console.log("Успешный вход");
        setFormData(defaultFormData);
        navigate('/main');

        
  
      } catch (error) {
        setError(true);
      }
  

    };

    return (
        <>
            <FormContainer>
            {error ? <Span>Пароль или логин были неверны</Span> : <></>}
              <Input
                value={formData.email}
                type={"text"}
                id={"email"}
                onChange={onChange}
                placeholder="Ваш email для входа"
              />

              <Input
                value={formData.password}
                placeholder="Ваш пароль для входа"
                type={"text"}
                id={"password"}
                onChange={onChange}
              />
              <Button onClick={onSubmit}>Войти</Button>
            </FormContainer>
        </>
    )
}

export default LogIn