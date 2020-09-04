export const decrementQuantity = (item) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {


        const firestore = getFirestore();
        const state = getState();


        let newCart = state.firebase.profile.Cart;
        let item1 = newCart.filter(Cartitem => Cartitem.id === item.id);
        newCart = newCart.filter(Cartitem => Cartitem.id !== item.id);

        if (item1 !== [] && item1[0].quantity > 1) {
            item1[0].quantity -= 1;
            newCart = newCart.concat([item1[0]]);

        }



        firestore.collection('users').doc(state.firebase.auth.uid).update({
            Cart: newCart

        }).then(() => {
            // make async call to database
            dispatch({
                type: 'Decrement_Quantity',
                newCart
            });

        });


    }
};