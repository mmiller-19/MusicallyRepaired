const router = require('express').Router();
const {createShop, getAllShops} = require('../../controllers/repairShopController');

router.route('/').get(getAllShops).post(createShop);

module.exports = router;