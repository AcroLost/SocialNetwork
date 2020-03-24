import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {

    postsData: [
        { id: 1, message: 'Hi', likesCount: 10 },
        { id: 2, message: 'first post', likesCount: 15 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: action.postText,
                likesCount: 5
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }

        case SET_USER_PROFILE:

            return {
                ...state,
                profile: action.profile
            }

        case SET_USER_STATUS:

            return {
                ...state,
                status: action.status
            }

        default:
            return state;

    }
}

export const addPostActionCreator = (postText) => {
    return { type: ADD_POST, postText }
}

export const setUserProfileAC = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}

export const setUserStatusAC = (status) => {
    return { type: SET_USER_STATUS, status }
}

export const setUserProfile = (userId) => {

    return (dispatch) => {

        profileAPI.profileUser(userId)
            .then((res) => {
                dispatch(setUserProfileAC(res.data));
            });
    }
}

export const setUserStatusThunk = (userId) => {

    return (dispatch) => {

        profileAPI.setUserStatus(userId)

            .then((res) => {
                dispatch(setUserStatusAC(res.data));
            });
    }
}

export const updateUserStatusThunk = (status) => {

    return (dispatch) => {

        profileAPI.updateUserStatus(status)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserStatusAC(status));
                }
            });
    }
}

export default profileReducer;