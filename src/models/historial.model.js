const db = require("../config/db");

exports.getAll = (idusuario) => {
  const sql = "SELECT * FROM historico WHERE idusuario = ?";
  return db.query(sql, [idusuario]);
};


exports.create = (user) => {
  const { idusuario, porcentaje } = user;

  const sql = `
        INSERT INTO historico 
        (idusuario, porcentaje)
        VALUES (?, ?)
      `;

  const values = [
    idusuario, porcentaje
  ];

  return db.query(sql, values);
};
