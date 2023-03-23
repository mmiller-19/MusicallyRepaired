const Customer = require('../models/Customer');

module.exports = {
    getAllCustomers(req, res) {
        Customer.find()
            .then((customers) => res.json(customers))
                .catch((error) => res.status(500).json(error));
    },
    createCustomer(req, res) {
        Customer.create(req.body)
            .then((newCustomer) => res.json(newCustomer))
                .catch((error) => res.status(500).json(error));
    }
};