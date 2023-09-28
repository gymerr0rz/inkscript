const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

// Get files
router.get('/:filename', uploadController.get_file);

module.exports = router;
