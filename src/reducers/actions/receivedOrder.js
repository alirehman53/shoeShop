export const receivedOrder = (order) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {


        const firestore = getFirestore();

        firestore.collection("order").doc(order.id).update({
            received: true
        }).then(

            dispatch({
                type: 'ReceivedOrder'
            })

        );






    }



};