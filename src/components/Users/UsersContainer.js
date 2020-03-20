import React from 'react';
import { connect } from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setTotalUsersCountAC,
    isLoadingAC,
    unfollowAC, toggleFollowingProgressAC
} from '../../redux/usersReducer';

import Users from './Users';

import { usersAPI } from "../../api/api";
import { Spin } from 'antd';



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.isLoading(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

            this.props.isLoading(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.isLoading(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.isLoading(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Spin size="large" /> : null}
            <Users
                usersPage={this.props.usersPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        isLoading: (isLoading) => {
            dispatch(isLoadingAC(isLoading))
        },
        toggleFollowingProgress: (isLoading, userId) => {
            dispatch(toggleFollowingProgressAC(isLoading, userId))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);