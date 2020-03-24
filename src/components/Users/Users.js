import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../image/ava.jpg";
import { NavLink } from "react-router-dom";
import { Button, Pagination } from 'antd';

const Users = ({ totalUsersCount, pageSize, currentPage, users, followingInProgress, onPageChanged, follow, unfollow }) => {

  // let pagesCount = Math.ceil(totalUsersCount / pageSize);



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