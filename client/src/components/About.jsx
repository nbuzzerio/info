import React from 'react'
import Heading from './Heading.jsx'
import Available from './Available.jsx'
import Summary from './Summary.jsx'
import Stats from './Stats.jsx'
import Jump from './Jump.jsx'


class About extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log('props inside About render:', this.props)
    let info = this.props.aboutInfo;

    if (!info) { return null}
    return (
      <div>
        <div>
          <Heading name={info.breedName} otherNames ={info.otherNames}/>
        </div>
        <img src= {info.imageUrl} height="200" width="200"></img>

      </div>
    )
  }
}

export default About;