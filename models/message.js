const {Schema} = require('mongoose');

const messageSchema = new Schema({
    direction: String,
    creationDate: {
        type: Date,
        default: Date.now
    },
    content: String,
    senderId: String,
});

const Message = model('Message', messageSchema);

module.exports = Message;