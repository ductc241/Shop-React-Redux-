const initialState = {
    isLogin: false,
    userInfor: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.USER_LOGIN_SUCCESS:
        //     return {
        //         ...state,
        //         isLoggedIn: true,
        //         userInfor: action.userInfo
        //     }
        // case actionTypes.USER_LOGIN_FAIL:
        //     return {
        //         ...state,
        //         isLoggedIn: false,
        //         userInfor: null
        //     }
        // case actionTypes.PROCESS_LOGOUT:
        //     return {
        //         ...state,
        //         isLoggedIn: false,
        //         userInfor: null
        //     }
        default:
            return state;
    }
}

export default userReducer;