import { setUserData } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:

            return {
                ...state,
                initialized: true
            }

        default:
            return state;

    }
}

export const setInitializedAC = () => {
    return { type: SET_INITIALIZED }
}

export const initializeApp = () => {

    return (dispatch) => {

        let promise = dispatch(setUserData());

        promise.then(() => {
            dispatch(setInitializedAC());
        })
    }
}

export default appReducer;