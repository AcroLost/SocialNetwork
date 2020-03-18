const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {

    postsData: [
        { id: 1, message: 'Hi', likesCount: 10 },
        { id: 2, message: 'first post', likesCount: 15 }
    ],

    newPostText: '',
    profile: null
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

        case SET_USER_PROFILE:

            return {
                ...state,
                profile: action.profile
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

export const setUserProfileAC = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}

export default profileReducer;