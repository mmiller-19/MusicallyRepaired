const router = require('express').Router();
const {getAllNotes, createNote} = require('../../controllers/noteController');

router.route('/').get(getAllNotes).post(createNote);

module.exports = router;