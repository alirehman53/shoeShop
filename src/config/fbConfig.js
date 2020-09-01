import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: 'AIzaSyBmS3SYlzWMVaYmH1FhkIWAubSj4QKsy98',
    authDomain: 'shoeshop-f8e62.firebaseapp.com',
    databaseURL: 'https://shoeshop-f8e62.firebaseio.com',
    projectId: 'shoeshop-f8e62',
    storageBucket: 'shoeshop-f8e62.appspot.com',
    messagingSenderId: '560915392343',
    appId: '1:560915392343:web:fd49b5658493e37d75c012',
    measurementId: 'G-FLEV8QH931',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.firestore();

export default firebase;