const router = require('express').Router();
const {createInstrument, getAllInstruments} = require('../../controllers/instrumentController');

router.route('/').get(getAllInstruments).post(createInstrument);

module.exports = router;