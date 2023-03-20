const {connect, connection, model} = require('mongoose');
const connectionString = 'mongodb://127.0.0.1:27017/musicallyDB';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;