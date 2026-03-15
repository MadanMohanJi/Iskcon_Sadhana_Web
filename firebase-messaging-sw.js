importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCAA-N2AN7buELcz1jOLq4LCCwWF7osa7c",
  authDomain: "sadhana-49558.firebaseapp.com",
  projectId: "sadhana-49558",
  storageBucket: "sadhana-49558.firebasestorage.app",
  messagingSenderId: "871884934655",
  appId: "1:871884934655:web:75473386b9d44679bcebca"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/vite.svg'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});