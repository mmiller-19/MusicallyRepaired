const router = require('express').Router();
const {createTechAccount, getAllTechs} = require('../../controllers/technicianController');

router.route('/').get(getAllTechs).post(createTechAccount);

module.exports = router;