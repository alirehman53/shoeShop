export const removeAll = () => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {


        const firestore = getFirestore();
        const state = getState();

        firestore.collection('users').doc(state.firebase.auth.uid).update({
            Cart: []

        }).then(() => {
            // make async call to database
            dispatch({
                type: "RemoveAll",
                newCart:[]
            });

        });


    }
};