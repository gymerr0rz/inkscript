const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const authController = require('../controllers/authController');

router.get('/confirm/:token', registerController.confirm_user);
router.get('/retry', registerController.retry_confirm_user);
router.post('/register', registerController.create_user);
router.post('/login', authController.handle_user);

module.exports = router;
