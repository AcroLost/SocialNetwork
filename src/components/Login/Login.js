import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Login = () => {

    const onSubmit = (dataSet) => {
        console.log(dataSet);
        //AJAX QUERY
    }

    return (
        <div>
            <h1>Please sign in</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    );
}

export default Login;

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field name='login' component='input' placeholder={'Login'} />
            </p>
            <p>
                <Field name='password' component='input' placeholder={'Password'} />
            </p>
            <p>
                <Field name='rememberMe' component='input' type='checkbox' /> remember me
            </p>
            <button>Log in</button>
        </form>
    );
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)
