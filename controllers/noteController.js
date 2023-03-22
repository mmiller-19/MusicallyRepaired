const Note = require('../models/notes');

module.exports = {
    getAllNotes(req, res) {
        Note.find()
            .then((notes) => res.json(notes))
                .catch((error) => res.status(500).json(error));
    },
    createNote(req, res) {
        Note.create(req.body)
            .then((newNote) => res.json(newNote))
                .catch((error) => res.status(500).json(error));
    }
};