import React from "react";
import { useNavigate } from "react-router-dom";
import css from '../../../styles/styles.css'

const {HeaderContainer, HeaderCSS, Button} = css


const Head = () => {

    const navigate = useNavigate();

    const deleteToken = () => {
        sessionStorage.removeItem('myAccessData');
        navigate('/login')
    }

    return (
        <>
        <HeaderContainer>
            <HeaderCSS.Logo>MoneyTracker</HeaderCSS.Logo>
            <HeaderCSS.MenuContainer>
                <Button onClick={ () => navigate('/') }>Регистрация</Button>
                <Button onClick={ () => navigate('/login') }>Авторизация</Button>
                <Button onClick={ deleteToken }>Выйти</Button>
            </HeaderCSS.MenuContainer>
        </HeaderContainer>
        </>
    )
}

export default Head