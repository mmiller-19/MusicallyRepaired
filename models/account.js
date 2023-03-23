const {Schema, model} = require('mongoose');

const accountSchema = new Schema ({
    accountType: String,
    email: String,
    password: String
});

const Account = model('Account', accountSchema);
module.exports = Account;