const Message = require('../models/Message');

module.exports = {
    getAllMessages(req, res) {
        Message.find()
            .then((messages) => res.json(messages))
                .catch((error) => res.status(500).json(error));
    },
    createMessage(req, res) {
        Message.create(req.body)
            .then((newMessage) => res.json(newMessage))
                .catch((error) => res.status(500).json(error));
    }
};