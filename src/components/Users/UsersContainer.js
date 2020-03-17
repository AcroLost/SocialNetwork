import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setSelectedPageAC, setTotalUserCount } from '../../redux/usersReducer';
import * as axios from 'axios';

class UsersContainer extends Component {

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

        return (
            <Users usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);