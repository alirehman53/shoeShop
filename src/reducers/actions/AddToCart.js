export const addToCart = (item) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {

        const firestore = getFirestore();
        const state = getState();


        let newCart = state.firebase.profile.Cart;
        let exists = newCart.filter(Cartitem => Cartitem.id === item.id);
        console.log(exists);
        if (exists.length === 0) {

            newCart = newCart.concat([{
                ...item,
                quantity: 1,
            }]);


            firestore.collection('users').doc(state.firebase.auth.uid).update({
                Cart: newCart

            }).then(() => {
                // make async call to database
                dispatch({
                    type: 'Add_To_Cart',
                    newCart
                });

            });

        }







    }
};