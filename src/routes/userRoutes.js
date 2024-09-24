const express = require('express');
const UserController = require('../controllers/userController.js');
const router = express.Router();

router.get('/users', UserController.getAllUsers);
router.post('/users', UserController.createUser);
router.post('/user', UserController.userSessionInit);

module.exports = router;
