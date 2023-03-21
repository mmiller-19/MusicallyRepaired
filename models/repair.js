const {Schema} = require('mongoose');

const repairSchema = new Schema({
    shopName: String,
    address: String,
    owner: String,
    primaryContactName: String,
    primaryContactPhone: Number,
    primaryContactEmail: String,
});

const Repair = model('repair', repairSchema);

module.exports = Repair;