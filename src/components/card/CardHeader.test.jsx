import React from 'react';
import CardHeader from './CardHeader';
import TestRenderer from 'react-test-renderer';

describe('CardHeader', () => {
  it('renders', () => {
    const component = TestRenderer.create(<CardHeader title="" model="" status="" manufacturer="" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
