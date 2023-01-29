const router = require('express').Router();
const UsersController = require('../controllers/UsersController')


router.post('/register', UsersController.registerUser);

router.post('/login', UsersController.loginUser);

router.post('/current', UsersController.currentUser);


module.exports= router