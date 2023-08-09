import React, {useContext, useState} from 'react';
import '../styles/authorization.css'
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context";
function Login ({isLogin, setIsLogin}) {

    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const submit = (evt) => {
        evt.preventDefault();
        navigate('/choose')
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className="authorization">
            <form className='authorization__form' method='post'>
                <span className='authorization__name'>Авторизация</span>
                <input
                    value={login}
                    onChange={(evt) => setLogin((evt.target.value))}
                    className='authorization__input'
                    type="email"
                    placeholder='Логин'
                />
                <input
                    value={password}
                    onChange={(evt) => setPassword((evt.target.value))}
                    className='authorization__input'
                    type="password"
                    placeholder='Пароль'
                />
                <button className='authorization__button' onClick={submit}>
                    Войти
                </button>
            </form>
        </div>
    );
}

export default Login;