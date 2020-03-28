import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png';

const Header = ({ auth, logOutUser }) => {

    const { login, isAuth } = auth;

    return <header className={s.header}>
        <img src={logo} alt="logo" />


        <div className={s.loginBlock}>
            {isAuth
                ? <div>
                    <span className={s.userName}>{login} </span>
                    <span>||</span>
                    <span className={s.logout} onClick={logOutUser}> Log out</span>
                </div>

                : <NavLink to={'/login'}>
                    Login
                  </NavLink>}
        </div>
    </header>
}

export default Header;