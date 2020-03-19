import React, { Component } from 'react';
import * as axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserDataAC } from '../../redux/authReducer';


class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.resultCode === 0) {
                    this.props.setUserData(res.data.data);
                }
            });
    }

    render() {
        const { auth } = this.props;

        return <Header auth={auth} />
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (data) => {
            dispatch(setUserDataAC(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);