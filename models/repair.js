const {Schema} = require('mongoose');

const repairSchema = new Schema({
    shopName: String,
    address: String,
    owner: String,
    primaryContactName: String,
    primaryContactPhone: Number,
    primaryContactEmail: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
            'Please provide a valid email address'
        ],
    }
});

const repair = model('repair', repairSchema);

module.exports = repair;