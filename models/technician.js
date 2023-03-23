const {Schema, model} = require('mongoose');

const technicianSchema = new Schema({
    name: String,
    accountId: { type: 'ObjectId', ref: 'Account' }
});

const Technician = model('Technician', technicianSchema);
module.exports = Technician;