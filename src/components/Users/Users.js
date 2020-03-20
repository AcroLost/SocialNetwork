import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../image/ava.jpg";
import { NavLink } from "react-router-dom";
import { usersAPI } from '../../api/api';
import { Button, Pagination } from 'antd';

let Users = ({ usersPage, onPageChanged, follow, unfollow, toggleFollowingProgress }) => {

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
      {/* {pages.map(p => {
        return <span className={currentPage === p && s.selectedPage}
          onClick={(e) => {
            onPageChanged(p);
          }}>{p}</span>
      })} */}
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
              ? <Button type="primary" loading={followingInProgress.some(id => id === user.id)} onClick={() => {
                toggleFollowingProgress(true, user.id);
                usersAPI.unfollowUser(user.id)
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      unfollow(user.id);
                    }
                    toggleFollowingProgress(false, user.id);
                  });



              }}>Unfollow</Button>
              : <Button type="primary" loading={followingInProgress.some(id => id === user.id)} onClick={() => {
                toggleFollowingProgress(true, user.id);
                usersAPI.followUser(user.id)
                  .then(response => {
                    if (response.data.resultCode == 0) {
                      follow(user.id);
                    }
                    toggleFollowingProgress(false, user.id);
                  });


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