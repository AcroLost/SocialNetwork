import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setSelectedPageAC, setTotalUserCount } from '../../redux/usersReducer';



const mapStateToProps = (state) => {

    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

        onSelectedPage: (page) => {
            dispatch(setSelectedPageAC(page))
        },

        setTotalUserCount: (totalUserCount) => {
            dispatch(setTotalUserCount(totalUserCount))
        }
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;