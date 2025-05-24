const db = require("../config/db");

exports.getAll = () => {
  return db.query("SELECT * FROM historico");
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
