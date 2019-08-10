// <!-- The core Firebase JS SDK is always required and must be listed first -->
// importScripts("https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js")
// importScripts("https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js")

// // <!-- TODO: Add SDKs for Firebase products that you want to use
// //      https://firebase.google.com/docs/web/setup#config-web-app -->

//   // Your web app's Firebase configuration
import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB8CnYQ00Aor8ElLggzyv90U621A0yE8aU",
    authDomain: "notification-process.firebaseapp.com",
    databaseURL: "https://notification-process.firebaseio.com",
    projectId: "notification-process",
    storageBucket: "",
    messagingSenderId: "707800558890",
    appId: "1:707800558890:web:ec3f1e7190cf6619"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.requestPermission()
.then(() => {
  console.log("have permission");
  return messaging.getToken()
})
.then(token => {
  console.log('token is -->',token);
})
.catch(err => {
  console.log("error Occured");
  
})