const {Schema, model} = require('mongoose');

const workOrderSchema = new Schema ({
    repairDate: Date,
    dateCompleted: Date,
    repairReason: String,
    repairStatus: String,
    customerId: { type: 'ObjectId', ref: 'Customer' },
    repairShopId: { type: 'ObjectId', ref: 'RepairShop' },
    instrumentId: { type: 'ObjectId', ref: 'Instrument' },
    technicianId: { type: 'ObjectId', ref: 'Technician' },
    messageId: { type: 'ObjectId', ref: 'Message' },
    noteId: { type: 'ObjectId', ref: 'Note' }
});

const WorkOrder = model('WorkOrder', workOrderSchema);
module.exports = WorkOrder;