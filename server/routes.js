var router = require('express').Router();
var controllers = require('./controllers.js');

router.get('/user', controllers.getUser);

module.exports = router;
