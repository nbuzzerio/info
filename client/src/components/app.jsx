import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux'
import About from './About.jsx';

const IP = 'localhost';
const PORT = 3000;

const blankState = {
  about : {
    id: '',
    breedName: '',
    availableForAdoption: '',
    imageUrl: '',
    summary: ''
  },

  stats : {
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
    vocality: ''
  },

  specs : {
    type: '',
    weightMin: '',
    weightMax: '',
    heightMin: '',
    heightMax: '',
    family: '',
    areaOfOrigin: '',
    dateOfOrigin: '',
    otherNames: []
  },

  history: '',
  temprament: '',
  upkeep: '',

  health : {
    majorConcerns: '',
    minorConcerns: '',
    occaisonallySeen: '',
    suggestedTests: '',
    lifeSpan: '',
    note: ''
  },

  disclaimer: '',
}

class App extends React.Component {
  constructor(props) {
    super(props)


    this.loadInfo = this.loadInfo.bind(this);
  }

  componentDidMount() {
    // this.setState(blankState, () => {
      // console.log('blankState: ', blankState)
      // console.log('this in setstate callback in componenet didmount', this)
      this.loadInfo()
//    })

  }


  loadInfo () {
    //get random # betw. 1-100

    let breedId = Math.ceil(Math.random() * 100);
    let queryString = `?id=${breedId}`;

    // this.setState = this.setState.bind(this);



    //send get request to server with query string reflecting random breedId, will return that breeds info.
    $.ajax({
      method: 'GET',
      url: `http://${IP}:${PORT}/api/oneBreed/${queryString}`
      // success: (data) => {
      //   console.log('data in ajax success: ', data)
      //   // this.setState(data);
      // }
    })
      .then((data)=>{
        this.props.updateBreed(data)
      })
  }



  render() {
    return (
      <div>
        test
        <div>
          <About aboutInfo = {this.props.breed.about} />
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  const breed = state.breed;

  return {
    breed: breed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBreed: (data) => dispatch(
      {
        type: 'receive',
        data: data
      }
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);