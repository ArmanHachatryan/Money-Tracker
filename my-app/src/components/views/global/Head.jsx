import React from "react";
import { useNavigate } from "react-router-dom";
import css from '../../../styles/styles.css'

const {HeaderContainer, HeaderCSS, Button} = css


const Head = () => {

    const navigate = useNavigate();

    return (
        <>
        <HeaderContainer>
            <HeaderCSS.Logo>MoneyTracker</HeaderCSS.Logo>
            <HeaderCSS.MenuContainer>
                <Button onClick={ () => navigate('/') }>Регистрация</Button>
                <Button onClick={ () => navigate('/login') }>Авторизация</Button>
                <Button onClick={ () => navigate('/main') }>Главное меню</Button>
            </HeaderCSS.MenuContainer>
        </HeaderContainer>
        </>
    )
}

export default Head