import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { connect } from 'react-redux';
import { logInUser } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';

const Login = ({ logInUser, isAuth, captchaURL }) => {

    const onSubmit = ({ email, password, rememberMe, captcha }) => {
        logInUser(email, password, rememberMe, captcha);
    }

    if (isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px 0',
            textAlign: 'center'
        }}>
            <div>
                <h1>Please sign in</h1>

                <LoginForm onSubmit={onSubmit}
                    captcha={captchaURL} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL
    }
}


export default connect(mapStateToProps, { logInUser })(Login);

