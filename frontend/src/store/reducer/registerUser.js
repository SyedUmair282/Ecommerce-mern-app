const Initial_state = {
    register_user: null,
    loading: null,
    status2: ""

}
export default (state = Initial_state, action) => {
    switch (action.type) {
        case 'USER_REGISTER':
            return ({
                ...state,
                register_user: action.payload,
                loading: false,
                status2: "Register successfull"
            })
        case 'USER_REGISTER_FAILED':
            return ({
                ...state,
                register_user: {},
                loading: false,
                status2: 'Failed to register'
            })

        default:
            return state;
    }
}