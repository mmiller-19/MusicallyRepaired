const Account = require('../models/account');


module.exports = {
    getAllAccounts(req, res) {
        Account.find()
            .then((accounts) => res.json(accounts))
                .catch((error) => res.status(500).json(error));
    }
};