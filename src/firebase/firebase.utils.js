import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBBWocOAKTAhcFf-D-fISKpuYoqLji4FtY",
    authDomain: "online-cloth-db.firebaseapp.com",
    projectId: "online-cloth-db",
    storageBucket: "online-cloth-db.appspot.com",
    messagingSenderId: "464298551657",
    appId: "1:464298551657:web:2ebc1e46004a8a7c57b5f8",
    measurementId: "G-1QJ9BZC3HM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


