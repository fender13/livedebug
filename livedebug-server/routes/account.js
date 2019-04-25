const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');
const { authentication, authorization } = require('../middlewares/auth');


router.post('/new', authentication, accountController.newAccount);
router.get('/:accountNumber', authentication, accountController.findAccounts);
router.delete('/:accountNumber',authentication, authorization, accountController.remove);

module.exports = router
