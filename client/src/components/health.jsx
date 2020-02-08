import React from 'react';

class Health extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      test: true
    }
  }
}

render () {
  return (
    <div>
      {/* <div>Header goes here</div> */}
      <div id="healthbody">Body goes here</div>
    </div>
  )
}

const wrapper = mount(<Health />);

const text = wrapper.find('div div');

console.log('text: ', text);

expect(text).toHaveText();

