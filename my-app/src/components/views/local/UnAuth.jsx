import React from "react";
import css from "../../../styles/form.css";



const { FormContainer, H1, Span } = css;

const UnAuth = () => {
  

  return (
    <>
      <FormContainer>
        <H1>Вы не авторизованы, перейдите на страницу авторизации или регистрации!</H1>
        <Span>Ошибка 401</Span>
      </FormContainer>
    </>
  );
};

export default UnAuth;
