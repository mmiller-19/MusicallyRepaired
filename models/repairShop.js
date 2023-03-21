const {Schema, model} = require('mongoose');

const repairShopSchema = new Schema({
    shopName: String,
    address: String,
    owner: String,
    primaryContactName: String,
    primaryContactPhone: Number,
    primaryContactEmail: String,
});

const RepairShop = model('RepairShop', repairShopSchema);
module.exports = RepairShop;