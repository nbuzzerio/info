import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //about
      id: '',
      breedName: '',
      availableForAdoption: '',
      imageUrl: '',
      summary: '',

      //charts
      energyLevel: '',
      exerciseRequirements: '',
      playfullness: '',
      affectionLevel: '',
      friendlinessToDogs: '',
      friendlinessToOtherPets: '',
      friendlinessToStrangers: '',
      watchfullness: '',
      easeOfTraining: '',
      groomingRequirements: '',
      heatSensitivity: '',
      vocality: '',

      //specs
      type: breedTypes[randomInt(1, 7) - 1],
      weightMin: randomWeightMin,
      weightMax: randomWeightMax,
      heightMin: randomHeightMin,
      heightMax: randomHeightMax,
      family: lorem.loremIpsum(options.familyAndArea),
      areaOfOrigin: lorem.loremIpsum(options.familyAndArea),
      dateOfOrigin: `${randomInt(5, 19)}00s`,
      otherNames: otherNameList,

      //detailed info
      history: lorem.loremIpsum(options.history),
      temprament: lorem.loremIpsum(options.tempramentAndUpkeep),
      upkeep: lorem.loremIpsum(options.tempramentAndUpkeep),

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
  }


  render() {
    return (
      <div>
        test
      </div>
    )
  }

}


const MapStateToProps = (state) => {
  const breedInfo = state.breedInfo
}

export default App;