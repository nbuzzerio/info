const mongoose = require('mongoose');
const IP = '172.31.34.129';
const PORT = '27017'

mongoose.connect(`mongodb://localhost/breedInfo`, {useNewUrlParser: true});

var db = mongoose.connection;

db.once('open', ()=> {console.log(`mongoose connected`)})

let breedSchema = mongoose.Schema({
  id: Number,
  availableForAdoption: Number,
  imageUrl: String,
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
  otherNames: []

})