const Initial_state = {
    payment_data: null
}
export default (state = Initial_state, action) => {
    switch (action.type) {
        case 'SAVEPAYMENT':
            return ({
                ...state,
                payment_data: action.payload
            })


        default:
            return state;
    }
}