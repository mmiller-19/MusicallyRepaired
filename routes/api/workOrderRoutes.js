const router = require('express').Router();
const {createWorkOrder, getAllWorkOrders} = require('../../controllers/workOrderController');

router.route('/').get(getAllWorkOrders).post(createWorkOrder);

module.exports = router;