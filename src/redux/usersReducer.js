const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

const IS_LOADING = 'IS_LOADING';

const initialState = {

    usersData: [

    ],
    pageSize: 5,
    totalUserCount: 0,
    selectedPage: 1,
    isLoading: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:

            return {
                usersData: state.usersData.map((user) => {

                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }

        case UNFOLLOW:

            return {
                usersData: state.usersData.map((user) => {

                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }

        case SET_USERS:

            return {
                ...state,
                usersData: action.users
            }

        case SET_SELECTED_PAGE:

            return {
                ...state,
                selectedPage: action.selectedPage
            }

        case SET_TOTAL_USER_COUNT:

            return {
                ...state,
                totalUserCount: action.totalUserCount
            }

        case IS_LOADING:

            return {
                ...state,
                isLoading: action.isLoading
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

export const setSelectedPageAC = (selectedPage) => {
    return { type: SET_SELECTED_PAGE, selectedPage }
}

export const setTotalUserCount = (totalUserCount) => {
    return { type: SET_TOTAL_USER_COUNT, totalUserCount }
}

export const isLoadingAC = (isLoading) => {
    return { type: IS_LOADING, isLoading }
}

export default usersReducer;