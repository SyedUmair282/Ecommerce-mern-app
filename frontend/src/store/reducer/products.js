const Initial_state = {
    products: [],
    loading: true

}
export default (state = Initial_state, action) => {
    switch (action.type) {
        case 'GET':
            return ({
                ...state,
                products: action.payload,
                loading: false,
            })

        default:
            return state;
    }
}