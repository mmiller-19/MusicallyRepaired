const WorkOrder = require('../models/WorkOrder');

module.exports = {
    getAllWorkOrders(req, res) {
        WorkOrder.find()
            .then((workorders) => res.json(workorders))
                .catch((error) => res.status(500).json(error));
    },
    createWorkOrder(req, res) {
        WorkOrder.create(req.body)
            .then((newWorkOrder) => res.json(newWorkOrder))
                .catch((error) => res.status(500).json(error));
    }
};