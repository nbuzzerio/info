const lorem = require('lorem-ipsum');
const dogBreeds = require('./dog_breeds.js');
const db = require('../database/index.js');
const options = require('./lorem_options');

// ex. randomInt(1,5) => generates 1-5 inclusive
let randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let breedTypes = ['Herding', 'Sporting', 'Non-Sporting', 'Working', 'Hounds', 'Terriers', 'Toy'];

let breedInfoArray = []
console.log(lorem.loremIpsum({count: 1, units: 'sentences'}))

//will generate random numbers, categories or ipsum data depending on breed attribute
for (let i = 1; i <=100; i++) {

  let randomWeightMin = randomInt(5, 75);
  let randomWeightMax = randomWeightMin + randomInt(5, 50);

  let randomHeightMin = randomInt(6, 48);
  let randomHeightMax = randomHeightMin + randomInt(1, 12);

  //generate array of 0-2 ipsum other names of 1-2 words
  let numberOfOtherNames = randomInt(0,3);
  let otherNameList = [];
  for (let i = 0; i < numberOfOtherNames.length; i++) {
    otherNameList.push(lorem.loremIpsum({count:randomInt(1,2), units: 'words'}))
  }


  let tempInfoObj = {
    //about
    id: i,
    breedName: dogBreeds.breeds[i + 1],
    availableForAdoption: randomInt(1, 500),
    imageUrl: `http://breedphotos.s3.us-east-2.amazonaws.com/photos/image${i}.jpg`,
    energyLevel: randomInt(1, 5),
    exerciseRequirements: randomInt(1, 5),
    playfullness: randomInt(1, 5),
    affectionLevel: randomInt(1, 5),
    friendlinessToDogs: randomInt(1, 5),
    friendlinessToOtherPets: randomInt(1, 5),
    friendlinessToStrangers: randomInt(1, 5),
    watchfullness: randomInt(1, 5),
    easeOfTraining: randomInt(1, 5),
    groomingRequirements: randomInt(1, 5),
    heatSensitivity: randomInt(1, 5),
    vocality: randomInt(1, 5),

    //specs
    type: breedTypes[randomInt(1, 7) - 1],
    weightMin: randomWeightMin,
    weightMax: randomWeightMax,
    heightMin: randomHeightMin,
    heightMax: randomHeightMax,
    family: lorem.loremIpsum(options.familyAndAreaOptions),
    areaOfOrigin: lorem.loremIpsum(options.familyAndAreaOptions),
    dateOfOrigin: `${randomInt(5, 19)}00s`,
    otherNames: otherNameList,

    //detailed info
    history: lorem.loremIpsum(options.historyOptions),
    temprament: lorem.loremIpsum(options.tempramentAndUpkeepOptions),
    upkeep: lorem.loremIpsum(options.tempramentAndUpkeepOptions),

    //health
    majorConcerns: lorem.loremIpsum(options.concerns),
    minorConcerns: lorem.loremIpsum(options.concerns),
    occaisonallySeen: lorem.loremIpsum(options.concerns),
    suggestedTests: lorem.loremIpsum(options.concerns),
    lifeSpan: `${randomInt(8, 20)} years`,
    note: lorem.loremIpsum({count: 2, units: 'sentences'}),

    //disclaimer
    disclaimer: lorem.loremIpsum({count: 2, units: 'sentences'}),

  }

  breedInfoArray.push(tempInfoObj);
}

module.exports.breedInfoArray = breedInfoArray;