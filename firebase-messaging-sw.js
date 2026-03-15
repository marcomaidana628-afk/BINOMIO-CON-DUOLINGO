// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js');

// Configuración Firebase (misma que en el index.html)
const firebaseConfig = {
    apiKey: "AIzaSyDREED85Ig_NLyLEMzLtjRLwrYPZn1Em0g",
    authDomain: "registro-binomio.firebaseapp.com",
    projectId: "registro-binomio",
    storageBucket: "registro-binomio.firebasestorage.app",
    messagingSenderId: "1005145229027",
    appId: "1:1005145229027:web:e8f6a5c7027d33ed7727d6",
    measurementId: "G-TRYZPKQG0J"
};

// Inicializar Firebase en el service worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Manejar notificaciones en segundo plano
messaging.onBackgroundMessage((payload) => {
    console.log('Notificación en segundo plano recibida:', payload);
    
    const notificationTitle = payload.notification?.title || payload.data?.title || 'Editorial Binomio';
    const notificationBody = payload.notification?.body || payload.data?.body || 'Recordatorio de turno';
    
    const notificationOptions = {
        body: notificationBody,
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        vibrate: [200, 100, 200],
        requireInteraction: true,
        silent: false,
        actions: [
            {
                action: 'open',
                title: 'Abrir aplicación'
            },
            {
                action: 'close',
                title: 'Cerrar'
            }
        ]
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Manejar clics en las notificaciones
self.addEventListener('notificationclick', (event) => {
    console.log('Notificación clickeada:', event);
    
    event.notification.close();
    
    if (event.action === 'open') {
        // Abrir la aplicación
        event.waitUntil(
            clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
                if (clientList.length > 0) {
                    return clientList[0].focus();
                }
                return clients.openWindow('/');
            })
        );
    }
});