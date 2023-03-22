const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const technicianRoutes =require('./technicianRoutes');

router.use('/accounts', accountRoutes);
router.use('/techs', technicianRoutes);

module.exports = router;