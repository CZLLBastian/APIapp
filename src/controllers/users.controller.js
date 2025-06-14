const userModel = require("../models/users.model");

exports.changePassword = async (req, res) => {
  try {
    const { id, oldPassword, newPassword } = req.body;

    // 1. Buscar usuario por ID
    const [rows] = await userModel.getById(id);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const user = rows[0];

    if (user.password !== oldPassword) {
      return res.status(401).json({ error: "Contraseña actual incorrecta" });
    }

    await userModel.updatePassword(id, newPassword);

    res.json({ message: "Contraseña actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    const { password: _, password2, ...userData } = user;

    res.status(200).json({
      message: "Inicio de sesión exitoso",
      user: userData,
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res
        .status(400)
        .json({ error: "El correo electrónico ya está registrado" });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await userModel.getAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
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
    } = req.body;

    // Validaciones básicas
    if (password !== password2) {
      return res.status(400).json({ error: "Las contraseñas no coinciden" });
    }

    const user = {
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
    };

    const result = await userModel.create(user);

    res
      .status(201)
      .json({ message: "Usuario creado", userId: result[0].insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
