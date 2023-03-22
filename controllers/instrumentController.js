const Instrument = require('../models/Instrument');

module.exports = {
    getAllInstruments(req, res) {
        Instrument.find()
            .then((instruments) => res.json(instruments))
                .catch((error) => res.status(500).json(error));
    },
    createInstrument(req, res) {
        Instrument.create(req.body)
            .then((newInstrument) => res.json(newInstrument))
                .catch((error) => res.status(500).json(error));
    }
};