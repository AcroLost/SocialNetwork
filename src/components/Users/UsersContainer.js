import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setSelectedPageAC, setTotalUserCount, isLoadingAC } from '../../redux/usersReducer';
import * as axios from 'axios';
import { Spin } from 'antd';
import { getUsers, followUser, unfollowUser } from '../../api/api';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.isLoading(true);

        getUsers(this.props.usersPage.selectedPage, this.props.usersPage.pageSize)
            .then((data) => {
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
                this.props.isLoading(false);
            });
    }

    onChangePage = (page) => {
        this.props.isLoading(true);

        getUsers(page, this.props.usersPage.pageSize)
            .then((data) => {
                this.props.isLoading(false);
                this.props.setUsers(data.items)
            });

        this.props.onSelectedPage(page)
    }

    follow = (userId) => {
        followUser(userId)
            .then((res) => {

                if (res.data.resultCode == 0) {
                    this.props.follow(userId)
                }
            });
    }

    unfollow = (userId) => {
        unfollowUser(userId)
            .then((res) => {
                if (res.data.resultCode == 0) {
                    this.props.unfollow(userId)
                }
            });
    }

    render() {

        const { usersPage } = this.props
        const { isLoading } = usersPage

        if (isLoading) {
            return <Spin size="large" />
        }

        return (

            <Users usersPage={usersPage}
                follow={this.follow}
                unfollow={this.unfollow}
                onChangePage={this.onChangePage} />

        );
    }
}

const mapStateToProps = (state) => {

    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        onSelectedPage: (page) => {
            dispatch(setSelectedPageAC(page))
        },

        setTotalUserCount: (totalUserCount) => {
            dispatch(setTotalUserCount(totalUserCount))
        },

        isLoading: (isLoading) => {
            dispatch(isLoadingAC(isLoading))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);