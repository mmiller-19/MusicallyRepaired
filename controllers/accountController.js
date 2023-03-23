const Account = require('../models/account');

module.exports = {
    getAllAccounts(req, res) {
        Account.find()
            .then((accounts) => res.json(accounts))
                .catch((error) => res.status(500).json(error));
    },
    getUserAccount(req, res) {
        Account.findOne({_id : req.params.accountId})
            .then((account) => 
                !account
                    ? res.status(404).json({message: 'No Account with that Id'})
                    : res.json(account))
                    .catch((error) => res.status(500).json(error));
    },
    createAccount(req, res) {
        Account.create(req.body)
            .then((newAccount) => res.json(newAccount))
                .catch((error) => res.status(500).json(error));
    }
};