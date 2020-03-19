import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ auth }) => {

    const { data, isAuth } = auth;
    const { login, email } = data
    console.log(auth)

    return <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png' alt="logo" />


        <div className={s.loginBlock}>
            {isAuth
                ? login
                : <NavLink to={'/login'}>
                    Login
                  </NavLink>}
        </div>
    </header>
}

export default Header;