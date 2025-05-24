const express = require('express');
const router = express.Router();
const historialController = require('../controllers/historial.controller');

router.post('/', historialController.createHistorial);
router.get('/', historialController.getAllHistorial);
module.exports = router;