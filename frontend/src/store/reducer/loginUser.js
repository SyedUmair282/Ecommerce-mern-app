const Initial_state = {
    login_user: "",
    status: null

}
export default (state = Initial_state, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return ({
                ...state,
                login_user: action.payload,

                status: "Login successfull"
            })
        case 'USER_LOGIN_FAILED':
            return ({
                ...state,
                login_user: {},

                status: action.payload
            })
        case 'USER_LOGOUT':
            return ({
                ...state,
                login_user: {},
                status: ""
            })


        default:
            return state;
    }
}