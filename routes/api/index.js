const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const messageRoutes = require('./messageRoutes')

router.use('/accounts', accountRoutes);
router.use('/messages', messageRoutes);

module.exports = router;