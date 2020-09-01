export const incrementQuantity = (item) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({
            type: 'Increment_Quantity',
            item
        });
    }
};