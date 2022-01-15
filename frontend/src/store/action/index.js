import axios from 'axios';
const product_data = () => {
    return async(dispatch) => {
        try {

            const { data } = await axios.get("/api/products")
            dispatch({
                type: "GET",
                payload: data,
            })
            console.log("Data has been received from server");

        } catch (error) {

            console.log("Failed to get data");
        }
    }

}

export {
    product_data
}