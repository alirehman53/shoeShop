export const LogIn = (user) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase();


        firebase.auth().signInWithEmailAndPassword(
            user.email,
            user.password
        ).then((hhh) => {
            console.log(hhh);

            dispatch({
                type: 'SIGNIN_SUCCESS'
            });
        }).catch((err) => {
            dispatch({
                type: 'SIGNIN_ERROR',
                err
            });
        });

    }
}

export const Logout = () => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {

            dispatch({
                type: 'LOGOUT_SUCCESS'
            })
        });
    }
}


export const SignUp = (User) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const firebase = getFirebase();



        firebase.auth().createUserWithEmailAndPassword(
            User.email,
            User.password
        ).then(response => {

            console.log(getFirestore());
            const firestore = getFirestore();
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: User.firstName,
                lastName: User.lastName,
                Cart: []
            });
        }).then(() => {
            dispatch({
                type: 'SUCCESS_SIGNUP'

            });
        }).catch((error) => {
            dispatch({
                type: 'ERROR_SIGNUP',
                error
            });
        });
    }
}