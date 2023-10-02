const router = require('express').Router();

const Homecontroller = require('../controllers/home_controller');

router.get('/', Homecontroller.home);
//middleware for any further route, access from here 
//router.use('/routername,require('./routerfile'));
router.use('/users',require('./users'));
module.exports = router;

