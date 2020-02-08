const db = require('../index.js')
const seedData = require('./seed_data.js');


db.seed(seedData.breedInfoArray);

