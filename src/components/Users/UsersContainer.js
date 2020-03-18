import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setSelectedPageAC, setTotalUserCount, isLoadingAC } from '../../redux/usersReducer';
import * as axios from 'axios';
import { Spin } from 'antd';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.isLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.usersPage.selectedPage}&count=${this.props.usersPage.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUserCount(res.data.totalCount);
                this.props.isLoading(false);
            });
    }

    onChangePage = (page) => {
        this.props.isLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${page}&count=${this.props.usersPage.pageSize}`)
            .then((res) => {
                this.props.isLoading(false);
                this.props.setUsers(res.data.items)
            });

        this.props.onSelectedPage(page)
    }

    render() {

        const { usersPage, follow, unfollow } = this.props
        const { isLoading } = usersPage

        if (isLoading) {
            return <Spin size="large" />
        }

        return (

            <Users usersPage={usersPage}
                follow={follow}
                unfollow={unfollow}
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