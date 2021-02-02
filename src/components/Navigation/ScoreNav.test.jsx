import React from 'react';
import ScoreNav from './ScoreNav';
import TestRenderer from 'react-test-renderer';

describe('ScoreNav', () => {
  it('renders', () => {
    const component = TestRenderer.create(<ScoreNav />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
