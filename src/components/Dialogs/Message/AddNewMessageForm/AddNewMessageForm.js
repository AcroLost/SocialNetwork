import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { required, maxLength } from '../../../../utils/validators/validators';


const maxLength50 = maxLength(50);

let AddNewMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Textarea}
                    name="newMessageText"
                    validate={[required, maxLength50]} />
            </div>

            <button>Отправить</button>
        </form>
    );
}

export default AddNewMessageForm = reduxForm({ form: 'addNewMessageForm' })(AddNewMessageForm);
