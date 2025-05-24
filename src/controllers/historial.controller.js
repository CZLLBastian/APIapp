const historialModel = require("../models/historial.model.js");

exports.getAllHistorial = async (req, res) => {
  try {
    const [historico] = await historialModel.getAll();
    res.json(historico);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createHistorial = async (req, res) => {
  try {
    const { idusuario, porcentaje } = req.body;

    const history = {
      idusuario,
      porcentaje,
    };

    const result = await historialModel.create(history);

    res
      .status(201)
      .json({ message: "Historial creado"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
