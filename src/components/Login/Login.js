import React from 'react';
import { Field, reduxForm } from 'redux-form';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {

    const onSubmit = (dataSet) => {
        console.log(dataSet);
        //AJAX QUERY
    }

    return (
        <div>
            <h1>Please sign in</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
}

export default Login;

