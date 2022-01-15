import axios from "axios";

const register = (name, email, password) => {
    return async(dispatch) => {
        try {

            //const { data } = await axios.get("/api/products")
            const config = { headers: { 'Content-Type': 'application/json' } }
            const { data } = await axios.post('/api/registration/user', { name, email, password }, config)
            dispatch({
                    type: "USER_REGISTER",
                    payload: data,
                })
                //console.log("Data has been received from server");
            console.log("User register successfully");

        } catch (error) {
            dispatch({
                type: "USER_REGISTER_FAILED",
                payload: "Failed to register",
            })
            console.log("User register failed");
        }
    }
}
export {
    register,
}