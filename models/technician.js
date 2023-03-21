const {Schema} = require('mongoose');

const technicianSchema = new Schema({
    name: String,
    accountId: ObjectId
    
});

const Technician = model('technician', technicianSchema);

module.exports = Technician;