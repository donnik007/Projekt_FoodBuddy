import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDcvt3tNCGlU8YwSBsZQakfo9hiTpmpOuo",
    authDomain: "foodbuddy-3c448.firebaseapp.com",
    databaseURL: "https://foodbuddy-3c448.firebaseio.com",
    projectId: "foodbuddy-3c448",
    storageBucket: "foodbuddy-3c448.appspot.com",
    messagingSenderId: "864698295961",
    appId: "1:864698295961:web:beb2e5b10d1c88b7fd7a08",
    measurementId: "G-DMB55S2KMY"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);