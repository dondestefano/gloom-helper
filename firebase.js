import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_Vcg4YZK-jREvc10mIzbonDIh2X9DJyE",
    authDomain: "gloomsaver-f7562.firebaseapp.com",
    projectId: "gloomsaver-f7562",
    storageBucket: "gloomsaver-f7562.appspot.com",
    messagingSenderId: "98632039710",
    appId: "1:98632039710:web:4a69a17fdd49359f961d0f",
    measurementId: "G-Y5JWGM7MZP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();