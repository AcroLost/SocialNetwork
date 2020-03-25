import React from 'react';

import s from './FormsControls.module.css';



export const FormControl = ({ input, meta: { touched, error }, children, ...restProps }) => {

    const hasError = touched && error;

    return (
        <div className={s.formControl + ' ' + (hasError && s.error)}>

            {children}

            {hasError && <p>{error}</p>}

        </div>
    );
}



export const Textarea = (props) => {

    const { input, meta, ...restProps } = props;

    return <FormControl {...props}>

        <textarea {...input} {...restProps} />
    </FormControl>
}

export const Input = (props) => {

    const { input, ...restProps } = props;

    return <FormControl {...props}>

        <input {...input} {...restProps} />
    </FormControl>
}
