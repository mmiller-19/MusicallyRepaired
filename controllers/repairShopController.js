const RepairShop = require('../models/repairShop');

module.exports = {
    createShop(req, res) {
        RepairShop.create(req.body)
            .then((newShop) => res.json(newShop))
                .catch((error) => res.status(500).json(error));
    },
    getAllShops(req, res) {
        RepairShop.find()
            .then((shops) => res.json(shops))
                .catch((error) => res.status(500).json(error));
    }
};