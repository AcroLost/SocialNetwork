import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA',
    GET_CAPTCHA = 'auth/GET_CAPTCHA';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data
            }
        case GET_CAPTCHA:

            return {
                ...state,
                captchaURL: action.captcha
            }

        default:
            return state;

    }
}

export const setUserDataAC = (id, login, email, isAuth) => {
    return { type: SET_USER_DATA, data: { id, login, email, isAuth } }
}

export const setCaptchaAC = (captcha) => {
    return { type: GET_CAPTCHA, captcha }
}

export const setUserData = () => {

    return async (dispatch) => {

        const res = await authAPI.authUser()

        if (res.data.resultCode === 0) {

            const { id, login, email } = res.data.data;
            dispatch(setUserDataAC(id, login, email, true));
        }
    }
}

export const logInUser = (email, password, rememberMe, captcha) => {

    return async (dispatch) => {

        const res = await authAPI.logInUser(email, password, rememberMe, captcha)

        if (res.data.resultCode === 0) {
            dispatch(setUserData());
        } else {

            if (res.data.resultCode === 10) {
                dispatch(getCaptchaThunk());
            }

            const message = res.data.messages.length > 0
                ? res.data.messages[0]
                : "Ooops, some error"

            dispatch(stopSubmit("login", { _error: message }));
        }
    }
}

export const logOutUser = () => {

    return async (dispatch) => {

        const res = await authAPI.logOutUser()

        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false));
        }
    }
}

export const getCaptchaThunk = () => {

    return async (dispatch) => {
        const res = await securityAPI.getCaptcha();
        const captchaURL = res.data.url;

        dispatch(setCaptchaAC(captchaURL));
    }
}


export default authReducer;