const {Schema} = require('mongoose');

const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,

});

const Customer = model('Customer', customerSchema);
module.exports = Customer;