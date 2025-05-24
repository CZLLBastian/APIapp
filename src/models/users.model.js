const db = require("../config/db");

exports.getAll = () => {
  return db.query("SELECT * FROM users");
};

exports.getUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

exports.create = (user) => {
  const {
    nombres,
    apellidos,
    email,
    edad,
    peso,
    talla,
    genero,
    nro_embarazo,
    password,
    password2,
  } = user;

  const sql = `
      INSERT INTO users 
      (nombres, apellidos, email, edad, peso, talla, genero, nro_embarazo, password, password2)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const values = [
    nombres,
    apellidos,
    email,
    edad,
    peso,
    talla,
    genero,
    nro_embarazo,
    password,
    password2,
  ];

  return db.query(sql, values);
};
