import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2
        }
        this.props.setUserProfile(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (userId) => {
            dispatch(setUserProfile(userId))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer);
