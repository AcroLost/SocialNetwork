import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'profile/ADD_POST',
    SET_USER_PROFILE = 'profile/SET_USER_PROFILE',
    SET_USER_STATUS = 'profile/SET_USER_STATUS',
    DELETE_POST = 'profile/DELETE_POST',
    SAVE_PHOTO = 'profile/SAVE_PHOTO';

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

        case SAVE_PHOTO:

            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
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

export const savePhotoAC = (photos) => {
    return { type: SAVE_PHOTO, photos }
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

export const savePhotoThunk = (file) => {
    return async (dispatch) => {

        const res = await profileAPI.savePhoto(file)

        if (res.data.resultCode === 0) {
            dispatch(savePhotoAC(res.data.data.photos));
        }
    }
}

export const saveProfileThunk = (profile) => {

    return async (dispatch, getState) => {

        const userId = getState().auth.id;

        const res = await profileAPI.saveProfile(profile)

        if (res.data.resultCode === 0) {
            dispatch(setUserProfile(userId));
        } else {
            dispatch(stopSubmit("profile-edit", { _error: res.data.messages[0] }))
            return Promise.reject(res.data.messages[0]);
        }
    }
}

export default profileReducer;