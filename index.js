const express = require('express');
const PORT = 3000;
const app = express();
const db = require('./config/connection');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log("Port: " + PORT);
    });
});