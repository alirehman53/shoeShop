import ItemReducer from './ItemReducer'
import {
    combineReducers
} from 'redux'
import {
    firestoreReducer
} from 'redux-firestore';
import {
    firebaseReducer
} from 'react-redux-firebase'
import authenticationReducer from './authReducer'
const rootReducer = combineReducers({
    authentication: authenticationReducer,
    ItemReducer: ItemReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});








export default rootReducer

// the key name will be the data property on the state object