import React from 'react';
import Button from './Button';
import TestRenderer from 'react-test-renderer';

describe('Button', () => {
  it('renders', () => {
    const component = TestRenderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
