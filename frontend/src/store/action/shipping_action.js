const shipping = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SAVE_SHIPPING",
            payload: data
        })
        localStorage.setItem('shipping_address', JSON.stringify(data))
    }
}
export {
    shipping
}