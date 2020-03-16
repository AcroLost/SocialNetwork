
const initialState = {

    friends: [
        { id: 1, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLdL6lKDCM-MaoUFy-2Jbnz2IXxYtY7FpLKHf_aB-TUFZDlMJr', name: 'Артем' },
        { id: 2, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLdL6lKDCM-MaoUFy-2Jbnz2IXxYtY7FpLKHf_aB-TUFZDlMJr', name: 'Маша' },
        { id: 3, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLdL6lKDCM-MaoUFy-2Jbnz2IXxYtY7FpLKHf_aB-TUFZDlMJr', name: 'Катя' }
    ]
}

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;