import lorem from '../data_import/breed_info/seed_data.js'
import breeds from './breeds'

// ex. randomInt(1,5) => generates 1-5 inclusive
let randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let breedTypes = ['Herding', 'Sporting', 'Non-Sporting', 'Working', 'Hounds', 'Terriers', 'Toy'];

  let breedInfoArray = []

  //will generate random numbers, categories or ipsum data depending on breed attribute
  for (let i = 1; i <=100; i++) {
    let randomWeightMin = randomInt(5, 75);
    let randomWeightMax = randomWeightMin + randomInt(5,50);
    let randomHeightMin = randomInt()

    let tempInfoObj = {
      id: i,
      breed: breeds[i-1];
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
      type: breedTypes[randomInt(1, 7) - 1],
      weightMin: randomInt(5,50),
      weightMax: (),
      heightMin: (),
      heightMax: (),
      family: String,
      areaOfOrigin: String,
      dateOfOrigin: `${randomInt(5, 19)}00s`,
      otherNames: []
    }

  }