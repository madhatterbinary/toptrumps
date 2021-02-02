import React from 'react';
import SelectedAttribute from './SelectedAttribute';
import TestRenderer from 'react-test-renderer';

describe('SelectedAttribute', () => {
  it('renders', () => {
    const component = TestRenderer.create(<SelectedAttribute selectedAttribute="" attributeValue="" status="" isClosed={true} isWinner={false} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
