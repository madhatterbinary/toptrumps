import React from 'react';
import ControlNav from './ControlNav';
import TestRenderer from 'react-test-renderer';

describe('ControlNav', () => {
  it('renders', () => {
    const component = TestRenderer.create(<ControlNav status="" handleButtonClick={()=>{}} isPlayEnabled={false} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
