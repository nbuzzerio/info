import lorem from '../ipsum_data/generator.js';
import breeds from './breeds';

// ex. randomInt(1,5) => generates 1-5 inclusive
let randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let breedTypes = ['Herding', 'Sporting', 'Non-Sporting', 'Working', 'Hounds', 'Terriers', 'Toy'];

let breedInfoArray = []

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
    otherNameList.push(lorem.generateWords(randomInt(1,2)))
  }


  let tempInfoObj = {
    //about
    id: i,
    breed: breeds[i + 1];
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
    family: lorem.generateWords(1),
    areaOfOrigin: lorem.generateWords(1),
    dateOfOrigin: `${randomInt(5, 19)}00s`,
    otherNames: otherNameList,

    //detailed info
    history: lorem.generateParagraphs(randomInt(1,3)),
    temprament: lorem.generateParagraphs(1),
    upkeep: lorem.generateParagraphs(1),

    //health
    majorConcerns: lorem.generateWords(randomInt(1,5)),
    minorConcerns: lorem.generateWords(randomInt(1,10)),
    occaisonallySeen: lorem.generateWords(randomInt(1,10)),
    suggestedTests: lorem.generateWords(randomInt(1,4)),
    lifeSpan: `${randomInt(8-20)} years`,
    note: lorem.generateSentence()
  }

  breedInfoArray.push(tempInfoObj);
}