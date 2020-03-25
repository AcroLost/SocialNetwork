import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'user/FOLLOW',
    UNFOLLOW = 'user/UNFOLLOW',
    SET_USERS = 'user/SET_USERS',
    SET_CURRENT_PAGE = 'user/SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'user/SET_TOTAL_USERS_COUNT',
    IS_LOADING = 'user/IS_LOADING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'user/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case IS_LOADING: {
            return { ...state, isLoading: action.isLoading }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isLoading
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}


export const followAC = (userId) => {
    return { type: FOLLOW, userId }
}

export const unfollowAC = (userId) => {
    return { type: UNFOLLOW, userId }
}

export const setUsersAC = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrentPageAC = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
}

export const setTotalUsersCountAC = (totalUsersCount) => {
    return { type: SET_TOTAL_USERS_COUNT, totalUsersCount }
}

export const isLoadingAC = (isLoading) => {
    return { type: IS_LOADING, isLoading }
}

export const toggleFollowingProgressAC = (isLoading, userId) => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isLoading, userId }
}

export const getUsers = (currentPage, pageSize) => {

    return async (dispatch) => {
        dispatch(isLoadingAC(true));

        const data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(isLoadingAC(false));
        dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersCountAC(data.totalCount));
    }
}

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgressAC(true, userId));

    const response = await apiMethod;

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgressAC(false, userId));
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        const apiMethod = usersAPI.unfollowUser(userId);
        followUnfollow(dispatch, userId, apiMethod, unfollowAC);
    }
}

export const follow = (userId) => {

    return async (dispatch) => {
        const apiMethod = usersAPI.followUser(userId);
        followUnfollow(dispatch, userId, apiMethod, followAC);
    }
}

export default usersReducer;