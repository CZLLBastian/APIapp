const db = require("../config/db");

exports.getAll = () => {
  return db.query("SELECT * FROM users");
};

exports.updateUser = (id, user) => {
  const { nombres, apellidos, edad, peso, talla } = user;

  const sql = `
    UPDATE users 
    SET nombres = ?, apellidos = ?, edad = ?, peso = ?, talla = ?
    WHERE id = ?
  `;

  const values = [nombres, apellidos, edad, peso, talla, id];

  return db.query(sql, values);
};

exports.getById = (id) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  return db.query(sql, [id]);
};

exports.updatePassword = (id, newPassword) => {
  const sql = "UPDATE users SET password = ?, password2 = ? WHERE id = ?";
  return db.query(sql, [newPassword, newPassword, id]);
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
