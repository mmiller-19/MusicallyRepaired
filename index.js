const express = require('express');
const PORT = 3000;
const app = express();
const db = require('./config/connection');
const routes = require('./routes');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log("Port: " + PORT);
    });
});