// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDREED85Ig_NLyLEMzLtjRLwrYPZn1Em0g",
    authDomain: "registro-binomio.firebaseapp.com",
    projectId: "registro-binomio",
    storageBucket: "registro-binomio.firebasestorage.app",
    messagingSenderId: "1005145229027",
    appId: "1:1005145229027:web:e8f6a5c7027d33ed7727d6",
    measurementId: "G-TRYZPKQG0J"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification?.title || 'Editorial Binomio';
    const notificationBody = payload.notification?.body || 'Recordatorio de turno';
    
    const notificationOptions = {
        body: notificationBody,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        vibrate: [200, 100, 200]
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
