const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');
const tasksController = require('../controllers/tasksController');
const userController = require('../controllers/userController');
const weatherController = require('../controllers/weatherController');
const uploadMiddleware = require('../middleware/uploadMiddleware');

// Notes routes
router.post('/createNote', notesController.create_notes);
router.get('/getNotes', notesController.get_notes);
router.delete('/deleteNote', notesController.delete_note);

// Tasks routes
router.post('/createTask', tasksController.create_task);
router.get('/getTasks', tasksController.get_tasks);
router.delete('/deleteTask/:id', tasksController.delete_task);
router.post('/changeStatusTask', tasksController.change_status_task);
router.post('/modifyTask', tasksController.modify_task);

// User routes
router.post('/changeSettings', userController.change_settings);
router.post(
  '/uploadProfileImage',
  uploadMiddleware.single('profile_image'),
  userController.upload_profile_image
);

router.get('/getUser', userController.get_user);
router.delete('/deleteUser', userController.delete_user);

// Weather routes
router.post('/getWeather', weatherController.get_weather);

module.exports = router;
