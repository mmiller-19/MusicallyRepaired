const {Schema, model} = require('mongoose');

const instrumentSchema = new Schema ({
    type: String,
    make: String,
    model: String,
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }
});

const Instrument = model('Instrument', instrumentSchema);
module.exports = Instrument;