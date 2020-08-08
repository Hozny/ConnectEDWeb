import app from 'firebase/app';
import 'firebase/auth';

const config = { 
    apiKey: "AIzaSyCPhZBC6iU0vx65hXARn9DZGtGFXUMpMR4",
    authDomain: "webconnected-d0aae.firebaseapp.com",
    databaseURL: "https://webconnected-d0aae.firebaseio.com",
    projectId: "webconnected-d0aae",
    storageBucket: "webconnected-d0aae.appspot.com",
    messagingSenderId: "516135460194",
    appId: "1:516135460194:web:a9e081267b3a58b2ef603b",
    measurementId: "G-508ZJTJQ7D"
};

class Firebase { 
    constructor() { 
        app.initializeApp(config); 

        this.auth = app.auth(); 
    }

    /* Auth API */
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password) 
    
    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut(); 

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => 
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;
