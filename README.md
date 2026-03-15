 SISTEMA DE REGISTRO DE TURNOS - EDITORIAL BINOMIO

📋 Descripción General

Sistema multi-usuario para registro de turnos (mañana/tarde) con almacenamiento en la nube, notificaciones push interactivas estilo Duolingo, y control total de asistencia. Diseñado específicamente para la Editorial Binomio con un enfoque en la experiencia de usuario y recordatorios personalizados.

✨ Características Principales

🕒 Gestión de Turnos

· Registro de entrada/salida para turnos de mañana (09:00) y tarde (14:30)
· Cálculo automático de horas trabajadas
· Resumen de pagos basado en salario por hora
· Visualización en tabla con todos los días del mes

🔔 Sistema de Notificaciones Push (Estilo Duolingo)

· Notificaciones automáticas 15 minutos antes de cada turno:
  · 🌅 Entrada Mañana: 08:45
  · 🏁 Salida Mañana: 12:45
  · ☀️ Entrada Tarde: 14:15
  · 🌙 Salida Tarde: 18:45
· Mensajes rotativos diarios (10 por categoría)
· Aparecen en el banner del dispositivo junto a otras apps
· Funcionan incluso con la aplicación cerrada (service worker)

📁 Almacenamiento Automático

· Firebase Cloud: Sincronización en la nube con Google Auth
· Local: Backup automático en localStorage
· Carpeta local: Guardado automático en estructura: EDITORIAL_BINOMIO/USUARIO/AÑO/MES/

🎉 Festividades de Bolivia (Automático)

· Doodles animados en días festivos
· Detección automática de fechas móviles (Carnaval, Viernes Santo, etc.)
· Notificaciones temáticas para cada celebración

👥 Gestión de Usuarios

· Múltiples usuarios con perfiles independientes
· Creación y selección de usuarios
· Datos separados por usuario

🛠️ Panel de Desarrollador

· Editor de código en tiempo real
· Implementación de mejoras instantáneas
· Contraseña de acceso: menuruchan2

📊 Exportación/Importación

· Exportar a JSON con todos los días del mes
· Importar datos desde archivo JSON
· Resumen detallado de horas y pagos

🚀 Tecnologías Utilizadas

· Frontend: HTML5, CSS3, JavaScript (ES6+)
· Base de datos: Firebase Firestore
· Autenticación: Firebase Auth (Google)
· Notificaciones: Firebase Cloud Messaging (FCM)
· Service Workers: Para notificaciones en segundo plano
· Iconos: Font Awesome 6
· Fuentes: Google Fonts (Roboto, Playfair Display)

📱 Compatibilidad

· ✅ Desktop (Chrome, Firefox, Edge, Safari)
· ✅ Tablets (iOS/iPadOS, Android)
· ✅ Móviles (responsive design)
· ✅ PWA ready (service worker implementado)

🔧 Configuración e Instalación

1. Requisitos Previos

· Navegador moderno con soporte para Service Workers
· Cuenta de Firebase (opcional para nube)
· Servidor web (Apache, Nginx, o cualquier hosting)

2. Archivos Necesarios

```
📁 tu-proyecto/
├── index.html (principal)
├── firebase-messaging-sw.js (service worker)
└── (opcional) favicon.ico
```

3. Configuración Firebase

Si deseas usar tu propia instancia de Firebase:

1. Crea un proyecto en Firebase Console
2. Habilita Authentication (Google Sign-In)
3. Habilita Firestore Database
4. Habilita Cloud Messaging
5. Reemplaza firebaseConfig en ambos archivos con tus credenciales

4. VAPID Key (Notificaciones)

La key actual es: BKj9M74NZ379aAl82qmOJrcOEQCh932pOyYaLzwDyf_VgXSWCr5DoNZbahYJqJQf1ypUc5sZhu3aoUQgNbh1hEs

Para generar una nueva:

1. En Firebase Console → Configuración del proyecto → Cloud Messaging
2. En "Web configuration" → "Generar par de claves"

📖 Guía de Uso

Primeros Pasos

1. Abre la aplicación
2. Selecciona o crea un usuario
3. (Opcional) Inicia sesión con Google para sincronización en la nube
4. Activa las notificaciones cuando el navegador lo solicite

Registro de Turnos

· Mañana: Botones naranjas (Entrada/Salida)
· Tarde: Botones azules (Entrada/Salida)
· El sistema registra automáticamente fecha y hora

Notificaciones

· Se activan automáticamente al conceder permiso
· Recibirás recordatorios 15 minutos antes de cada turno
· Cada día muestra un mensaje diferente (rotación de 10 mensajes)

Festividades

· No requiere acción del usuario
· Se activan automáticamente en días festivos de Bolivia
· Incluye animaciones y notificaciones especiales

🎯 Mensajes de Notificación

🌅 Entrada Mañana (08:45)

· "El búho ya tomó su café, ¿y tú?"
· "En la editorial ya se escuchan teclados. ¿Tú aún en pijama?"
· "Las páginas no se escriben solas, y tu turno no se registra solo"

🏁 Salida Mañana (12:45)

· "¿Sobreviviste a la mañana? Cuéntanos: ¿cuántas páginas editaste?"
· "El búho te suelta las alas. Registra tu salida y vuela a casa"
· "Dejas el testigo al turno tarde. Pero primero... ¡registra tu salida!"

☀️ Entrada Tarde (14:15)

· "¿Comiste mucho? Te espera una tarde movida"
· "Los de la mañana ya se fueron. Ahora te toca brillar a ti"
· "Se acabó el descanso. Vuelve a la trinchera"

🌙 Salida Tarde (18:45)

· "La ciudad se enciende y tú te vas a casa"
· "Si trabajaste hasta tarde, te ganaste el descanso doble"
· "Cada salida es un pequeño logro. Mañana será otro día"

🔐 Seguridad

· Autenticación segura con Google
· Datos cifrados en Firebase
· Tokens únicos por dispositivo para notificaciones
· Contraseña de desarrollador protegida

📊 Estructura de Datos en Firestore

```
usuarios/
  └─ {uid}/
      ├─ usuarios: array de nombres
      ├─ registros: array de turnos
      ├─ usuarioActual: string
      └─ salarioHora: number

fcm_tokens/
  └─ {uid}/
      ├─ token: string
      ├─ usuario: string
      └─ fecha: timestamp

notificaciones_pendientes/
  └─ {id}/
      ├─ token: string
      ├─ titulo: string
      ├─ cuerpo: string
      └─ fecha: timestamp
```

🐛 Solución de Problemas

Las notificaciones no aparecen

1. Verifica que los permisos estén concedidos
2. Asegúrate que el service worker esté registrado
3. Comprueba la consola del navegador (F12) para errores

Error de Firebase

1. Verifica las credenciales en firebaseConfig
2. Asegúrate que los servicios estén habilitados en la consola

Problemas de sincronización

1. Inicia sesión con Google
2. Haz clic en "Exportar" como backup
3. Recarga la página

📝 Créditos

· Desarrollador: Marco Maidana
· Empresa: Editorial Binomio
· Año: 2024
· Versión: 2.5

📄 Licencia

Este software es propiedad de Editorial Binomio. Todos los derechos reservados.

---

🔄 Actualizaciones Recientes (v2.5)

· ✅ Sistema completo de notificaciones push con FCM
· ✅ Mensajes rotativos estilo Duolingo
· ✅ Service worker para notificaciones en segundo plano
· ✅ Panel de control de notificaciones
· ✅ Integración con festividades de Bolivia
· ✅ Guardado automático en carpeta local
· ✅ Optimización para dispositivos móviles
