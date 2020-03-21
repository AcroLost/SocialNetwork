import * as axios from 'axios';


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b4f99289-4387-4890-a9a9-fbce3d7bca05'
    }
})

export const usersAPI = {

    getUsers(selectedPage = 1, pageSize = 5) {
        return instance.get(`users/?page=${selectedPage}&count=${pageSize}`)
            .then((res) => {
                return res.data
            })
    },

    followUser(userId) {

        return instance.post(`follow/${userId}`)
    },

    unfollowUser(userId) {

        return instance.delete(`follow/${userId}`)
    },

    profileUser(userId) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {

    authUser() {
        return instance.get(`auth/me`)
    }
}