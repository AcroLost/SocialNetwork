import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../../../utils/validators/validators';

import { Textarea } from '../../../common/FormsControls/FormsControls';



const maxLength15 = maxLength(15);

let AddNewPostForm = (props) => {

    return (
        <div>
            {
                props.isOwner
                    ? < form onSubmit={props.handleSubmit} >
                        <div>
                            <Field style={{ width: 300 }}
                                name='postText'
                                component={Textarea}
                                validate={[]}
                                placeholder='Введите текст поста' />
                        </div>
                        <button style={
                            {
                                padding: '3px 20px',
                                background: 'white',
                                border: '1px solid gray',
                                cursor: 'pointer'
                            }}>
                            Добавить пост
                        </button>
                    </form >
                    : < form onSubmit={props.handleSubmit} >
                        <div>
                            <Field disabled style={{ width: 300 }}
                                name='postText'
                                component={Textarea}
                                validate={[required, maxLength15]}
                                placeholder='Введите текст поста' />
                        </div>
                        <button disabled style={
                            {
                                padding: '3px 20px',
                                background: 'white',
                                border: '1px solid gray',
                                cursor: 'pointer'
                            }}>
                            Добавить пост
                    </button>
                    </form >
            }
        </div>
    );
}

export default AddNewPostForm = reduxForm({ form: 'addNewPostForm' })(AddNewPostForm);