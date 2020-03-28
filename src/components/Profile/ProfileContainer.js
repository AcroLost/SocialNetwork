import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, setUserStatusThunk, updateUserStatusThunk, savePhotoThunk, saveProfileThunk } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

import { compose } from 'redux';

class ProfileContainer extends Component {

    uploadProfile() {
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

    componentDidMount() {
        this.uploadProfile();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.uploadProfile();
        }
    }

    render() {
        return (
            <Profile savePhoto={this.props.savePhotoThunk}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatusThunk}
                saveProfile={this.props.saveProfileThunk} />
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
        {
            setUserProfile, setUserStatusThunk, updateUserStatusThunk,
            savePhotoThunk, saveProfileThunk
        }),

    withRouter
)(ProfileContainer);
