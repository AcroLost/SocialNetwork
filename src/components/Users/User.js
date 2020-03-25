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
              }}>Unfollow</Button>

            : <Button type="primary"
              loading={followingInProgress.some(id => id === user.id)} onClick={() => {

                follow(user.id)
              }}>Follow</Button>}

        </p>
      </div>

      <div>
        <p>{user.name}</p>
        <p>{user.status}</p>
      </div>
      <div>
        <p>{"user.location.country"}</p>
        <p>{"user.location.city"}</p>
      </div>

    </div>
  )
}

export default User;