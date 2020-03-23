import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';

import s from '../../../components/common/FormsControls/FormsControls.module.css'

let LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {props.error &&
                <div className={s.errorBlock}>
                    {props.error}
                </div>
            }
            <span>
                <Field name='email' component={Input}
                    placeholder={'Login'} validate={required} />
            </span>
            <span>
                <Field name='password' component={Input}
                    placeholder='Password' validate={required}
                    type='password' />
            </span>
            <div>
                <label>
                    remember me
                    <Field name='rememberMe' component={Input} type='checkbox' />
                </label>
            </div>

            <button>Log in</button>
        </form>
    );
}

export default LoginForm = reduxForm({ form: 'login' })(LoginForm)
