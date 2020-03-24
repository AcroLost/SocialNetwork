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

import { getUsersList, getTotalUsersCount, getPageSize, getFollowingInProgress, getCurrentPage, getIsLoading } from '../../redux/users-selectors';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {

        const { users, totalUsersCount, pageSize, currentPage, followingInProgress, isLoading, follow, unfollow, toggleFollowingProgress } = this.props

        if (isLoading) {
            return <Spin size="large" />
        }

        return (
            <Users
                users={users}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                followingInProgress={followingInProgress}
                onPageChanged={this.onPageChanged}
                follow={follow}
                unfollow={unfollow}
                toggleFollowingProgress={toggleFollowingProgress}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersList(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        isLoading: getIsLoading(state)
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