const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {

    usersData: [

    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:

            return {
                usersData: state.usersData.map((user) => {

                    if (user.id === action.userId) {
                        return {
                            ...user,
                            follow: true
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
                            follow: false
                        }
                    }
                    return user
                })
            }

        case SET_USERS:

            return {
                ...state,
                usersData: [
                    ...state.usersData,
                    ...action.users
                ]
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

export default usersReducer;