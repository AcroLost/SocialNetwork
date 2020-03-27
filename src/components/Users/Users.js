import React from 'react';
import { Pagination } from 'antd';
import User from './User';

const Users = ({ totalUsersCount, currentPage, users, followingInProgress, onPageChanged, follow, unfollow }) => {


  return <div>
    <div style={{ padding: 10 }}>
      <Pagination current={currentPage}
        onChange={onPageChanged}
        total={totalUsersCount} />
    </div>
    {
      users.map(user =>
        <User user={user}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow}
          key={user.id} />)
    }
  </div>
}

export default Users;