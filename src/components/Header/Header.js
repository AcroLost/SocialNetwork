import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ auth, logOutUser }) => {

    const { email, login, isAuth } = auth;

    return <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png' alt="logo" />


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