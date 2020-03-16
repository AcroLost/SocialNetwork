const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const initialState = {

    dialogsData: [
        { id: 1, name: 'Артем' },
        { id: 2, name: 'Маша' },
        { id: 3, name: 'Катя' }
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'Come on' }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            const newMessage = {
                id: 4,
                message: state.newMessageText,
            }

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }

        case UPDATE_MESSAGE_TEXT:

            return {
                ...state,
                newMessageText: action.textMessage
            }

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return { type: SEND_MESSAGE }
}

export const updateMessageTextActionCreator = (textMessage) => {
    return { type: UPDATE_MESSAGE_TEXT, textMessage: textMessage }
}

export default dialogsReducer;