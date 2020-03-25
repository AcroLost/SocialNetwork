import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD_POST',
    SET_USER_PROFILE = 'profile/SET_USER_PROFILE',
    SET_USER_STATUS = 'profile/SET_USER_STATUS',
    DELETE_POST = 'profile/DELETE_POST';

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

        case DELETE_POST:

            return {
                ...state,
                postsData: state.postsData.filter((item) => {
                    return item.id !== action.postId
                })
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

export const deletePostAC = (postId) => {
    return { type: DELETE_POST, postId }
}

export const setUserProfile = (userId) => {

    return async (dispatch) => {

        const res = await profileAPI.profileUser(userId)

        dispatch(setUserProfileAC(res.data));

    }
}

export const setUserStatusThunk = (userId) => {

    return async (dispatch) => {

        const res = await profileAPI.setUserStatus(userId)

        dispatch(setUserStatusAC(res.data));
    }
}

export const updateUserStatusThunk = (status) => {

    return async (dispatch) => {

        const res = await profileAPI.updateUserStatus(status)

        if (res.data.resultCode === 0) {
            dispatch(setUserStatusAC(status));
        }
    }
}

export default profileReducer;