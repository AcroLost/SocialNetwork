import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfileAC } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                this.props.setUserProfile(res.data);
            });
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
        setUserProfile: (profile) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

const ContainerComponentWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ContainerComponentWithUrlData);