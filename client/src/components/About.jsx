import React from 'react'



class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      about : this.props.about,
      alert : false
    }
  }


  render() {
    console.log('props inside About render:', this.props)
    return (
      <div>
        <div>about: ${this.props.about}</div>
      </div>
    )
  }
}

export default About;