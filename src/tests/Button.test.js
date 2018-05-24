import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

// describe('<Button />', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Button />, div);
//   });
// });

describe('<Button />', () => {
  const wrapper = shallow(<Button clickHandler={() => {console.log('hello world')}}/>);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it ('should return one child node, which is the text node.', () => {
    expect(wrapper).toHaveLength(1);
  })
  it ('test', () => {
    console.log(wrapper.find('button').simulate('click'))
  })
  it('check snapshot',()=>{

    let element = shallow(<Button/>)
    expect(element).toMatchSnapshot()

  })
});