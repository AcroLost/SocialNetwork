import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    setCurrentPageAC,
    setUsersAC,
    setTotalUsersCountAC,
    unfollow, toggleFollowingProgressAC, getUsers,
} from '../../redux/usersReducer';

import Users from './Users';

import { Spin } from 'antd';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize);
    }

    render() {

        if (this.props.usersPage.isLoading) {
            return <Spin size="large" />
        }

        return (
            <Users
                usersPage={this.props.usersPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleFollowingProgress: (isLoading, userId) => {
            dispatch(toggleFollowingProgressAC(isLoading, userId))
        },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsers(currentPage, pageSize))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);