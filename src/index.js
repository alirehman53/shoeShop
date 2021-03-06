import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    createStore,
    applyMiddleware,

} from 'redux';
import {
    compose
} from 'redux'
import {
    Provider
} from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {

    createFirestoreInstance,
    getFirestore,
    reduxFirestore
} from 'redux-firestore';
import {
    ReactReduxFirebaseProvider,
    getFirebase

} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';


const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
    attachAuthIsReady: true
};


const middleware = [thunk.withExtraArgument({
    getFirebase,
    getFirestore
}), ];



const store = createStore(rootReducer, compose(applyMiddleware(...middleware), reduxFirestore(fbConfig)));




console.log(store.getState())

const rrfProps = {
    firebase: fbConfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, //since we are using Firestore
};




ReactDOM.render( <Provider store = {store} >
    <
    ReactReduxFirebaseProvider {...rrfProps} >
    <App / >
    </ReactReduxFirebaseProvider>
	< /Provider > , document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();