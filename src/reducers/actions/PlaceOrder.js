export const PlaceOrder = (orderDetails) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {


        const firestore = getFirestore();
        const state = getState();


        let Cart = state.firebase.profile.Cart;

        let amount = 0;

        if (Cart) {

            for (let i = 0; i < Cart.length; i++) {
                amount += Cart[i].price * Cart[i].quantity;
            }

        }



        let Order = {
            cart: Cart,
            userId: state.firebase.auth.uid,
            amount,
            orderDetails
        };

        var newOrder = firestore.collection("order").doc();

        newOrder.set(Order).then(() => {

            firestore.collection("users").doc(state.firebase.auth.uid).update({
                Cart: []

            }).then(

                dispatch({
                    type: 'PLACE_ORDER'
                })

            );




        });

    }



};