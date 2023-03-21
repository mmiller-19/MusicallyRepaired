const {Schema} = require('mongoose');

const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Instrument'
    }
});

const Customer = model('Customer', customerSchema);
module.exports = Customer;