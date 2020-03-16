
import profileReducer from '../redux/profileReducer';
import dialogsReducer from '../redux/dialogsReducer';
import sidebarReducer from '../redux/sidebarReducer';

let store = {

    _state: {

        profilePage: {
            postsData: [
                { id: 1, message: 'Hi', likesCount: 10 },
                { id: 2, message: 'first post', likesCount: 15 }
            ],

            newPostText: ''
        },

        dialogsPage: {
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
        },

        sidebar: {
            friends: [
                { id: 1, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLdL6lKDCM-MaoUFy-2Jbnz2IXxYtY7FpLKHf_aB-TUFZDlMJr', name: 'Артем' },
                { id: 2, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLdL6lKDCM-MaoUFy-2Jbnz2IXxYtY7FpLKHf_aB-TUFZDlMJr', name: 'Маша' },
                { id: 3, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLdL6lKDCM-MaoUFy-2Jbnz2IXxYtY7FpLKHf_aB-TUFZDlMJr', name: 'Катя' }
            ]
        }
    },

    _callSubscriber() {

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;