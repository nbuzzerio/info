const mongoose = require('mongoose');
const IP = '172.31.34.129';
const PORT = '27017'
const seedData = require('./seed_data.js');

mongoose.connect(`mongodb://localhost/breed`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', ()=> {
  console.log(`mongoose connected`)
  seed(seedData.breedInfoArray)
})

let breedSchema = mongoose.Schema({
  id: Number,
  breedName: String,
  availableForAdoption: Number,
  imageUrl: String,
  summary: String,
  energyLevel: Number,
  exerciseRequirements: Number,
  playfullness: Number,
  affectionLevel: Number,
  friendlinessToDogs: Number,
  friendlinessToOtherPets: Number,
  friendlinessToStrangers: Number,
  watchfullness: Number,
  easeOfTraining: Number,
  groomingRequirements: Number,
  heatSensitivity: Number,
  vocality: Number,

  type: String,
  weightMin: Number,
  weightMax: Number,
  heightMin: Number,
  heightMax: Number,
  family: String,
  areaOfOrigin: String,
  dateOfOrigin: String,
  otherNames: [],

  history: String,
  temprament: String,
  upkeep: String,

  majorConcerns: String,
  minorConcerns: String,
  occaisonallySeen: String,
  suggestedTests: String,
  lifeSpan: String,
  disclaimer: String

})

let Breed = mongoose.model('Breed', breedSchema);

//checks if db has any documents
let dbCheck = () => {
  let findPromise = Breed.find({id:2}).exec();
  return findPromise;
}

let seed = (breedInfoArray) => {
  //check if there is an existing breedInfo DB
  console.log('seed gets called')
  dbCheck()
    .then((documents) => {
      if (documents.length === 0) {
        //console.log('doc ', doc)
        Breed.insertMany(breedInfoArray, function(error, docs) {
          if (error) {
            console.log('error: ', error)
          } else {
            console.log('success: ', docs.length, ' breeds inserted')
          }
        })
      } else {
        console.log('nothing seeded, already data in db')
      }
    })

}

let retreiveSimilar = () => {
  let findSimilarPromise = Breed.find({}, {'id', 'breedName', 'weightMin', 'weightMax', 'heightMin', 'heightMax', 'type'}).exec()

  return findSimilarPromise
}

let retreiveOne = (id) => {
  let findOnePromise = Breed.find({id: id}).exec()

  return findOnePromise
}


module.exports.retreiveSimilar = retreiveSimilar;
module.exports.Breed = Breed;