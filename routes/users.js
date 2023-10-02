const router = require('express').Router();

const userController = require('../controllers/users_controller');
//const postController = require('../controllers/post_controller');
router.get('/profile',userController.profile);

module.exports = router;