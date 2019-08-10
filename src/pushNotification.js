import * as firebase from "firebase";
// import {messaging} from 'firebase/messaging'
// import { pushNotification } from "../../client/src/services/noteServices";
export const initializeFirebase = () => {
  firebase.initializeApp()
  // use other service worker
  navigator.serviceWorker.register("/my-sw.js").then(registration => {
    firebase.messaging().useServiceWorker(registration);
  });
};

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("FireBase token is:", token);
    localStorage.setItem("pushToken", token);
    var data = {
      pushToken: token,
      userId: localStorage.getItem("userId")
    };
    console.log('data is ==>',data);
    
    // pushNotification(data);
    return token;
  } catch (error) {
    console.error(error);
  }
};