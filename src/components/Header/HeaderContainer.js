import React, { Component } from 'react';
import * as axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/authReducer';
import { usersAPI } from '../../api/api';


class HeaderContainer extends Component {

    componentDidMount() {
        this.props.setUserData()
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
        setUserData: () => {
            dispatch(setUserData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);