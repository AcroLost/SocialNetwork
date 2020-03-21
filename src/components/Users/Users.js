import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../image/ava.jpg";
import { NavLink } from "react-router-dom";
import { usersAPI } from '../../api/api';
import { Button, Pagination } from 'antd';

const Users = ({ usersPage, onPageChanged, follow, unfollow, toggleFollowingProgress }) => {

  const { totalUsersCount, pageSize, currentPage, users, followingInProgress } = usersPage;

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }


  return <div>
    <div>
      <Pagination current={currentPage}
        onChange={onPageChanged}
        total={totalUsersCount} />
    </div>
    {
      users.map(user => <div className={s.user} key={user.id}>
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

      </div>)
    }
  </div>
}

export default Users;