const {Schema, model} = require('mongoose');

const notesSchema = new Schema({
    creationDate: {
        type: Date,
        default: Date.now
    },
    creatorId: ObjectId,
    content: String,
});

const Notes = model('Notes', notesSchema);

module.exports = Notes;