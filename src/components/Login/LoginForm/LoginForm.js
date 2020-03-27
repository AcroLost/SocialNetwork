import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { createField, Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';

import s from '../../../components/common/FormsControls/FormsControls.module.css';


let LoginForm = ({ handleSubmit, error, captcha }) => {

    return (
        <form onSubmit={handleSubmit}>
            {error &&
                <div className={s.errorBlock}>
                    {error}
                </div>
            }
            <span>
                <Field style={{ width: 200 }} name='email' component={Input}
                    placeholder={'Login'} validate={required} />
            </span>
            <span>
                <Field style={{
                    width: 200,
                    marginTop: 10
                }} name='password' component={Input}
                    placeholder='Password' validate={required}
                    type='password' />
            </span>
            <div>
                <label style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginTop: 7
                }}>
                    <Field style={{ marginRight: 5 }} name='rememberMe' component={Input} type='checkbox' /> remember me
                </label>
            </div>

            {captcha && <img src={captcha} alt="captcha" />}

            {captcha && createField("Symbols from image", "captcha", [required], Input)}

            <button style={{
                padding: '3px 30px',
                background: 'white',
                border: '1px solid gray',
                cursor: 'pointer',
                marginTop: 7
            }}>Войти
            </button>
        </form >
    );
}

export default LoginForm = reduxForm({ form: 'login' })(LoginForm)
