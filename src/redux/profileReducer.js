const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const initialState = {

    postsData: [
        { id: 1, message: 'Hi', likesCount: 10 },
        { id: 2, message: 'first post', likesCount: 15 }
    ],

    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 5
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }

        case UPDATE_POST_TEXT:

            return {
                ...state,
                newPostText: action.textPost
            }

        default:
            return state;

    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}

export const updatePostTextActionCreator = (textPost) => {
    return { type: UPDATE_POST_TEXT, textPost: textPost }
}

export default profileReducer;