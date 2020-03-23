import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';

let LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='login' component={Input}
                    placeholder={'Login'} validate={required} />
            </div>
            <div>
                <Field name='password' component={Input} placeholder={'Password'} validate={required} />
            </div>
            <div>
                <Field name='rememberMe' component={Input} type='checkbox' /> remember me
            </div>
            <button>Log in</button>
        </form>
    );
}

export default LoginForm = reduxForm({ form: 'login' })(LoginForm)
