import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';



const Navbar = ({ sidebar }) => {

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Моя страница</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" activeClassName={s.activeLink}>Пользователи</NavLink>
        </div>
        <div className={s.item}>
            <a href="#s">Новости</a>
        </div>
        <div className={s.item}>
            <a href="#s">Музыка</a>
        </div>
        <div className={s.item}>
            <a href="#s">Настройки</a>
        </div>

        {/* <Friends friends={sidebar.friends} /> */}


    </nav>
}

export default Navbar;