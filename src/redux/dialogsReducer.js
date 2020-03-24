const SEND_MESSAGE = 'SEND_MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            const newMessage = {
                id: 4,
                message: action.messageText,
            }

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            }

        default:
            return state;
    }
}

export const sendMessageActionCreator = (messageText) => {
    return { type: SEND_MESSAGE, messageText }
}

export default dialogsReducer;