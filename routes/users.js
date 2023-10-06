const router = require('express').Router();

const userController = require('../controllers/users_controller');
//const postController = require('../controllers/post_controller');
router.get('/profile',userController.profile);
router.get('/signup',userController.signup);
router.get('/signin',userController.signin);
module.exports = router;