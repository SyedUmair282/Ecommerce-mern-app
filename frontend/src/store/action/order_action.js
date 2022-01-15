import axios from "axios";

const saveOrder = (order) => {
    return async(dispatch) => {
        try {
            const { token } = JSON.parse(localStorage.getItem('login_user'))

            const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }
            const { data } = await axios.post('/api/user/order', order, config)
            dispatch({
                type: "ORDER_RECEIVE_SUCCESS",
                payload: data,
            })
            console.log("Order has been received");


        } catch (error) {
            dispatch({
                type: "ORDER_RECEIVE_FAILED",
            })
            console.log("Order has not been received");
        }
    }
}
export {
    saveOrder
}