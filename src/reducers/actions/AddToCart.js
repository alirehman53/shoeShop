export const addToCart = (item) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({
            type: 'Add_To_Cart',
            item
        });
    }
};