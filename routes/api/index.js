const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const messageRoutes = require('./messageRoutes');
const customerRoutes = require('./customerRoutes');

router.use('/accounts', accountRoutes);
router.use('/messages', messageRoutes);
router.use('/customers', customerRoutes);

module.exports = router;