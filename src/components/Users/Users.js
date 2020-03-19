import React from 'react';
import s from './Users.module.css';
import ava from '../../image/ava.jpg';
import { Pagination } from 'antd';
import { NavLink } from 'react-router-dom';

const Users = ({ usersPage, follow, unfollow, onChangePage }) => {

  const { pageSize, totalUserCount, selectedPage } = usersPage;


  const users = usersPage.usersData.map((user) => {
    return (
      <div className={s.user}>

        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img src={user.photos.small != null
              ? user.photos.small
              : ava} alt="ava" />
          </NavLink>
          <p>
            {user.followed
              ? <button onClick={
                () => unfollow(user.id)}>Unfollow</button>
              : <button onClick={
                () => follow(user.id)}>Follow</button>
            }
          </p>
        </div>

        <div>
          <p>{user.name}</p>
          <p>Статус: {user.status}</p>
        </div>

        <div>
          <p>{"user.location.country"}</p>
          <p>{"user.location.city"}</p>
        </div>

      </div >
    );
  });


  const pagesCount = Math.ceil(totalUserCount / pageSize);

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {

    pages.push(i);
  }

  return (
    <div>
      {/* {
          pages.map((page) => {
            return <span className={selectedPage === page
              ? s.item + ' ' + s.active
              : s.item}
              onClick={() => this.onChangePage(page)} >

              {page}
            </span>
          })
        } */}

      <Pagination current={selectedPage}
        pageSize={pageSize}
        total={pagesCount}
        onChange={onChangePage} />

      <div className={s.users}>
        {users}
      </div>
    </div>
  );
}


export default Users;