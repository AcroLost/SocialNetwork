import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ dialogsPage, sendMessage, updateMessageText }) => {

    const { dialogsData, messagesData, newMessageText } = dialogsPage;


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

    const onSendMessage = () => {
        sendMessage();
    }

    const onUpdateMessageText = (event) => {
        const textMessage = event.target.value;
        updateMessageText(textMessage);
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
                <div>
                    <div>
                        <textarea value={newMessageText}
                            onChange={onUpdateMessageText} />
                    </div>

                    <button onClick={onSendMessage}>
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;