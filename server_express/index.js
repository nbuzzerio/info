var express = require('express');
const PORT = 3000;

var app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/../client/dist'));


app.listen(PORT, () => console.log('express listening on ', PORT));


//----------- ROUTES ----------------




