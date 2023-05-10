let express = require('express');
let UserController = require('../controller/admin/user')
let router = express.Router();


/* GET users listing. */
router.get('/info', UserController.getInfo);

router.post('/login', UserController.login);

module.exports = router;
