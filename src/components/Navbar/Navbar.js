import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';



const Navbar = ({ sidebar }) => {

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
        </div>
        <div className={s.item}>
            <a href="#s">News</a>
        </div>
        <div className={s.item}>
            <a href="#s">Music</a>
        </div>
        <div className={s.item}>
            <a href="#s">Settings</a>
        </div>

        {/* <Friends friends={sidebar.friends} /> */}


    </nav>
}

export default Navbar;