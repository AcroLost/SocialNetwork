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
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;

        this.props.getUsers(pageNumber, pageSize);
        this.props.setCurrentPageAC(pageNumber);
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

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsersAC,
        setCurrentPageAC, setTotalUsersCountAC, toggleFollowingProgressAC, getUsers

    })(UsersContainer);