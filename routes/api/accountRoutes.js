const router = require('express').Router();
const {createAccount, getAllAccounts, getUserAccount} = require('../../controllers/accountController');

router.route('/').get(getAllAccounts).post(createAccount);

router.route('/:accountId').get(getUserAccount);

module.exports = router;