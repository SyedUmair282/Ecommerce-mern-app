const Initial_state = {
    shipping_data: null
}
export default (state = Initial_state, action) => {
    switch (action.type) {
        case 'SAVE_SHIPPING':
            return ({
                ...state,
                shipping_data: action.payload
            })


        default:
            return state;
    }
}