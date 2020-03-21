import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_LOADING = 'IS_LOADING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
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
                    : state.followingInProgress.filter(id => id != action.userId)
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

    return (dispatch) => {
        dispatch(isLoadingAC(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {

                dispatch(isLoadingAC(false));
                dispatch(setUsersAC(data.items));
                dispatch(setTotalUsersCountAC(data.totalCount));
            });
    }
}

export const unfollow = (userId) => {
    debugger;
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId));

        usersAPI.unfollowUser(userId)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(unfollowAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false, userId));
            });
    }
}

export const follow = (userId) => {

    return (dispatch) => {
        debugger;
        dispatch(toggleFollowingProgressAC(true, userId));

        usersAPI.followUser(userId)
            .then(response => {

                if (response.data.resultCode == 0) {
                    dispatch(followAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false, userId));
            });
    }
}

export default usersReducer;