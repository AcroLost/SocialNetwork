import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../image/ava.jpg";
import { NavLink } from "react-router-dom";
import { Button } from 'antd';

const User = ({ user, followingInProgress, follow, unfollow }) => {

  return (
    <div className={s.user}>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small != null ? user.photos.small : userPhoto}
            className={s.userPhoto} alt="avatar" />
        </NavLink>

        <p>
          {user.followed

            ? <Button type="primary"
              loading={followingInProgress.some(id => id === user.id)} onClick={() => {

                unfollow(user.id)
              }}>Отписаться</Button>

            : <Button type="primary"
              loading={followingInProgress.some(id => id === user.id)} onClick={() => {

                follow(user.id)
              }}>Добавить</Button>}

        </p>
      </div>

      <div style={{ marginLeft: 300, fontSize: 16 }}>
        <NavLink to={'/profile/' + user.id}>
          <p className={s.userName}>{user.name}</p>
        </NavLink>
        <p>{user.status}</p>
      </div>

    </div>
  )
}

export default User;