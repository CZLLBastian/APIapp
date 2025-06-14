const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.post('/login', userController.login);
router.post('/changePassword', userController.changePassword);
router.post('/updateUser', userController.updateUser);

module.exports = router;
