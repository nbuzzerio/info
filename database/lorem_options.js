let randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.tempramentAndUpkeepOptions = {
  count: 1,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 3,
  paragraphUpperBound: 7
}

module.exports.familyAndAreaOptions = {
  count: 1,
  units: 'words'
}

module.exports.historyOptions = {
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

module.exports.summaryOptions = {
  count: 1,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 3,
  paragraphUpperBound: 7
}