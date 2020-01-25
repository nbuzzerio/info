const express = require('express');
const PORT = 3000;

let app = express();
const db = require('../database/index.js');

app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/../client/dist'));


app.listen(PORT, () => console.log('express listening on ', PORT));


//----------- ROUTES ----------------




