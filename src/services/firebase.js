import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApWKLJ1_rXgnp_ydif25Hnw1E5bWSNfTA",
    authDomain: "seatsreservation.firebaseapp.com",
    databaseURL: "https://seatsreservation-default-rtdb.firebaseio.com",
    projectId: "seatsreservation",
    storageBucket: "seatsreservation.appspot.com",
    messagingSenderId: "983450368130",
    appId: "1:983450368130:web:f93fe7c5d8f50053629c9b",
    measurementId: "G-X7NQFN5M56"
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();

export const moviesDB = databaseRef.child("movies");
export const sessionsDB = databaseRef.child("sessions");
export const reservedSeatsDB = databaseRef.child("reservedSeats");
//firebase.analytics();
