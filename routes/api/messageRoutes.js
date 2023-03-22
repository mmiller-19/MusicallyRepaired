const router = require('express').Router();
const {createMessage, getAllMessages} = require('../../controllers/messageController');

router.route('/').get(getAllMessages).post(createMessage);

module.exports = router;