export const removeOrder = (order) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {


        const firestore = getFirestore();


        firestore.collection('order').doc(order.id).delete().then(() => {
            // make async call to database
            dispatch({
                type: "Remove_Order"
            });

        });




    }
};