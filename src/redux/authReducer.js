import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data
            }

        default:
            return state;

    }
}

export const setUserDataAC = (id, login, email, isAuth) => {
    return { type: SET_USER_DATA, data: { id, login, email, isAuth } }
}

export const setUserData = () => {

    return (dispatch) => {

        authAPI.authUser()
            .then((res) => {

                if (res.data.resultCode === 0) {

                    const { id, login, email } = res.data.data;
                    dispatch(setUserDataAC(id, login, email, true));
                }
            });
    }
}

export const logInUser = (email, password, rememberMe) => {

    return (dispatch) => {

        authAPI.logInUser(email, password, rememberMe)
            .then((res) => {

                if (res.data.resultCode === 0) {
                    dispatch(setUserData());
                }
            });
    }
}

export const logOutUser = () => {

    return (dispatch) => {

        authAPI.logOutUser()
            .then((res) => {

                if (res.data.resultCode === 0) {
                    dispatch(setUserDataAC(null, null, null, false));
                }

            });
    }
}


export default authReducer;