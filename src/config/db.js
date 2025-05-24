const mysql = require('mysql2');
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config();

// Crear la conexión a la base de datos
const pool = mysql.createPool({
  // host: "localhost",
  // user: "root",
  // password: "admin",
  // database: "app",
  // port: process.env.DB_PORT || 3306
  host: "turntable.proxy.rlwy.net",
  user: "root",
  password: "qPziukiFIDeatIShHsOFqOekXznFSetY",
  database: "app",
  port: 54981
});

module.exports = pool.promise();
