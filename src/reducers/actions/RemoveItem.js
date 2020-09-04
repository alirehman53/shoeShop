export const removeItem = (item) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {


        const firestore = getFirestore();
        const state = getState();


        let newCart = state.firebase.profile.Cart;
        newCart = newCart.filter(Cartitem => Cartitem.id !== item.id);






        firestore.collection('users').doc(state.firebase.auth.uid).update({
            Cart: newCart

        }).then(() => {
            // make async call to database
            dispatch({
                type: "Remove_Item",
                newCart
            });

        });


    }
};