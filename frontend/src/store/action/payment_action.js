const savePayment = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SAVEPAYMENT",
            payload: data
        })
        localStorage.setItem('payment_data', JSON.stringify(data))
    }
}
export {
    savePayment
}