import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

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

const ContainerComponentWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ContainerComponentWithUrlData);