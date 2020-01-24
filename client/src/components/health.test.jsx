import Health from './health.jsx'

const wrapper = shallow(<Health />);
const text = wrapper.find('div div');
console.log('text: ', text);
expect(text).toHaveText();
