require('dotenv').config();

// Ahora puedes acceder a tus variables de entorno utilizando process.env
const puerto = process.env.PUERTO;
const urlBaseDeDatos = process.env.BASE_DE_DATOS_URL;

// Aquí continua el resto de tu código de inicialización de la API