import React, { Component } from 'react';

import s from './Users.module.css';
import ava from '../../image/ava.jpg';
import * as axios from 'axios';


export default class Users extends Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then((res) => {
        this.props.setUsers(res.data.items)
      });
  }

  render() {
    const { usersPage, follow, unfollow } = this.props;

    const users = usersPage.usersData.map((user) => {
      return (
        <div className={s.user}>

          <div>
            <img src={user.photos.small != null
              ? user.photos.small
              : ava} alt="ava" />
            <p>
              {user.follow
                ? <button onClick={
                  () => unfollow(user.id)}>Unfollow</button>
                : <button onClick={
                  () => follow(user.id)
                }>Follow</button>
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

        </div>
      );
    });

    return (
      <div className={s.users}>
        {users}
      </div>
    );
  }
}
