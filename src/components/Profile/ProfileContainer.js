import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, setUserStatusThunk, updateUserStatusThunk } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

import { compose } from 'redux';

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.setUserProfile(userId);
        this.props.setUserStatusThunk(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatusThunk} />
        );
    }
}

const mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps,
        { setUserProfile, setUserStatusThunk, updateUserStatusThunk }),

    withRouter
)(ProfileContainer);
