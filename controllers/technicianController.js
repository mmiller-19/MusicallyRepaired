const Technician = require('../models/technician');

module.exports = {
    createTechAccount(req, res) {
        Technician.create(req.body)
            .then((newTech) => res.json(newTech))
                .catch((error) => res.status(500).json(error));
    },
    getAllTechs(req, res) {
        Technician.find()
            .then((techs) => res.json(techs))
                .catch((error) => res.status(500).json(error));
    }
}