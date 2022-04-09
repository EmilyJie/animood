import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAXE_MTC98TlksEoWcwWEplNhsI8mnCw7A",
    authDomain: "animood-421e6.firebaseapp.com",
    databaseURL: "https://animood-421e6.firebaseio.com",
    projectId: "animood-421e6",
    storageBucket: "animood-421e6.appspot.com",
    messagingSenderId: "619825712491",
    appId: "1:619825712491:web:8fb4791d90d761555cd02e",
    measurementId: "G-DGJ69FDFMB"
};

firebase.initializeApp(firebaseConfig);
export default firebase;