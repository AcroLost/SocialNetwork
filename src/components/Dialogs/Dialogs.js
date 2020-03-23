import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import { Field, reduxForm } from 'redux-form';
import AddNewMessageForm from './Message/AddNewMessageForm/AddNewMessageForm';

const Dialogs = ({ dialogsPage, sendMessage }) => {

    const { dialogsData, messagesData } = dialogsPage;


    const dialogItems = dialogsData.map((item) => {

        const { id, name } = item;

        return <DialogItem key={id}
            name={name}
            id={id} />
    });

    const messages = messagesData.map((item) => {

        const { id, message } = item;

        return <Message key={id}
            message={message}
            id={id} />
    });

    const onSendMessage = (values) => {
        sendMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogItems}
            </div>

            <div className={s.messages}>
                <div>
                    {messages}
                </div>

                <AddNewMessageForm onSubmit={onSendMessage} />
            </div>
        </div>
    );
}

export default Dialogs;