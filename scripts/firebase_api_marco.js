//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {
    
    // Your API stuff goes here;  get it from firebase console
    apiKey: "AIzaSyAZZbYg_rrFWuMPWUx4NXQ7TMka3-zmdLA",
    authDomain: "mango-76400.firebaseapp.com",
    databaseURL: "https://mango-76400.firebaseio.com",
    projectId: "mango-76400",
    storageBucket: "mango-76400.appspot.com",
    messagingSenderId: "124942820208",
    appId: "1:124942820208:web:0249f52a34f1cef2a925b5"
    
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Create the Firestore database object
  // Henceforce, any reference to the database can be made with "db"
  const db = firebase.firestore();