import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { connect } from 'react-redux';
import { logInUser } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';

const Login = ({ logInUser, isAuth }) => {

    const onSubmit = ({ email, password, rememberMe }) => {
        logInUser(email, password, rememberMe);
    }

    if (isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div>
            <h1>Please sign in</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { logInUser })(Login);

