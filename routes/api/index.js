const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const technicianRoutes = require('./technicianRoutes');
const repairShopRoutes = require('./repairShopRoutes');

router.use('/accounts', accountRoutes);
router.use('/techs', technicianRoutes);
router.use('/repairShops', repairShopRoutes);

module.exports = router;