export const decrementQuantity = (item) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({
            type: 'Decrement_Quantity',
            item
        });
    }
};