import axios from "axios";

const login = (email, password) => {
    return async(dispatch) => {
        try {

            //const { data } = await axios.get("/api/products")
            const config = { headers: { 'Content-Type': 'application/json' } }
            const { data } = await axios.post('/api/user/login', { email, password }, config)
            dispatch({
                    type: "USER_LOGIN",
                    payload: data,
                })
                //console.log("Data has been received from server");
            localStorage.setItem('login_user', JSON.stringify(data));
            console.log("User login successfully");

        } catch (error) {
            dispatch({
                type: "USER_LOGIN_FAILED",
                payload: "Failed to login",
            })
            console.log("User login failed");
        }
    }
}
const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('login_user');
        dispatch({
            type: "USER_LOGOUT"
        })
        console.log("User logout successfully");
    }
}
export {
    login,
    logout
}