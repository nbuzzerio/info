let randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.tempramentAndUpkeep = {
  count: 1,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 3,
  paragraphUpperBound: 7
}

module.exports.familyAndArea = {
  count: 1,
  units: 'words'
}

module.exports.history = {
  count: randomInt(1,3),
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 3,
  paragraphUpperBound: 7
}

module.exports.concerns = {
  count: randomInt(1,10),
  units: 'words'
}

module.exports.summary = {
  count: 1,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 3,
  paragraphUpperBound: 7
}