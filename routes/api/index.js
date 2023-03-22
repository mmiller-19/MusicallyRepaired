const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const technicianRoutes = require('./technicianRoutes');
const repairShopRoutes = require('./repairShopRoutes');
const noteRoutes = require('./noteRoutes');

router.use('/accounts', accountRoutes);
router.use('/techs', technicianRoutes);
router.use('/repairShops', repairShopRoutes);
router.use('/notes', noteRoutes);

module.exports = router;