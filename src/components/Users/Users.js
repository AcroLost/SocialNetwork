import React, { Component } from 'react';

import s from './Users.module.css';
import ava from '../../image/ava.jpg';
import * as axios from 'axios';
import { Pagination } from 'antd';


export default class Users extends Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.usersPage.selectedPage}&count=${this.props.usersPage.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUserCount(res.data.totalCount);
      });
  }

  onChangePage = (page) => {

    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${page}&count=${this.props.usersPage.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items)
      });

    this.props.onSelectedPage(page)
  }

  render() {
    const { usersPage, follow, unfollow } = this.props;
    const { pageSize, totalUserCount, selectedPage } = usersPage;


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
          onChange={this.onChangePage} />

        <div className={s.users}>
          {users}
        </div>
      </div>
    );
  }
}
