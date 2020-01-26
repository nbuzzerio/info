const express = require('express');
const PORT = 3000;

let app = express();
const db = require('../database/index.js');

app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname + '/../client/dist'));


app.listen(PORT, () => console.log('express listening on ', PORT));


//----------- ROUTES ----------------

//route for
app.get('/api/allBreedsSimilar', (req, res) => {
  //retreives limited data for all breeds, returns a promise containing array of objects
  db.retreiveSimilar()
    .then((breedInfoArray) => {
      res.send(breedInfoArray)
    })

});

app.get('/api/oneBreed', (req, res) => {
  //retreives all data for one breed
  db.retreiveOne(req.body)
    .then((breedInfo) => {
      res.send(breedInfo)
    })
})


