import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                data: action.data,
                isAuth: true
            }

        default:
            return state;

    }
}

export const setUserDataAC = (data) => {
    return { type: SET_USER_DATA, data }
}

export const setUserData = () => {

    return (dispatch) => {

        authAPI.authUser()
            .then((res) => {

                if (res.data.resultCode === 0) {
                    dispatch(setUserDataAC(res.data.data));
                }
            });
    }
}


export default authReducer;