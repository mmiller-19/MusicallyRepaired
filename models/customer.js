const {Schema, model} = require('mongoose');

const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    accountId: { type: 'ObjectId', ref: 'Account' },
    instrumentId: { type: 'ObjectId', ref: 'Instrument' },
    workOrderId: { type: 'ObjectId', ref: 'WorkOrder' }
});

const Customer = model('Customer', customerSchema);
module.exports = Customer;