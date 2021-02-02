import React from 'react';
import CardImage from './CardImage'
import TestRenderer from 'react-test-renderer';

describe('Card', () => {
  it('renders', () => {
    const component = TestRenderer.create(<CardImage image="" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
