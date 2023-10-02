const router = require('express').Router();

const Homecontroller = require('../controllers/home_controller');

router.get('/', Homecontroller.home);
module.exports = router;