const router = require('express').Router();
const {createCustomer, getAllCustomers} = require('../../controllers/customerController');

router.route('/').get(getAllCustomers).post(createCustomer);

module.exports = router;