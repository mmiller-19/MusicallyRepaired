const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const messageRoutes = require('./messageRoutes');
const customerRoutes = require('./customerRoutes');
const instrumentRoutes = require('./instrumentRoutes')
const workOrderRoutes = require('./workOrderRoutes')

router.use('/accounts', accountRoutes);
router.use('/messages', messageRoutes);
router.use('/customers', customerRoutes);
router.use('/instruments', instrumentRoutes);
router.use('/workorders', workOrderRoutes);

module.exports = router;