const Initial_state = {
    order: null,
    status: null
}
export default (state = Initial_state, action) => {
    switch (action.type) {
        case 'ORDER_RECEIVE_SUCCESS':
            return ({
                ...state,
                order: action.payload,
                status: true
            })
        case 'ORDER_RECEIVE_FAILED':
            return ({
                ...state,
                order: null,
                status: false
            })


        default:
            return state;
    }
}