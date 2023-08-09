import React, {useContext} from 'react';
import '../styles/navbar.css'
import avatar from '../img/avatar.png'
import {AuthContext} from "../context";

function Navbar() {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <header className='page__header'>
            <nav className='navbar'>
                <div className='user-info'>
                    <img
                        src={avatar}
                        className='user-info__photo'
                        alt='аватарка пользователя'
                        width='40' height='40'
                    />
                    <span className='user-info__name'>Олейников Артём Джуниор</span>
                </div>
                <button
                    onClick={logout}
                    type='button'
                    className='logout'
                    title='Выйти из аккаунта'
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </nav>
        </header>
    );
}

export default Navbar;