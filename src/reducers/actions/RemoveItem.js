export const removeItem = (item) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({
            type: 'Remove_Item',
            item
        });
    }
};