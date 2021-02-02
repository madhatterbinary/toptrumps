import React from 'react';
import CardContainer from './CardContainer';
import SelectedAttribute from './SelectedAttribute';
import Card from './Card';
import TestRenderer from 'react-test-renderer';

describe('CardContainer', () => {
  it('renders', () => {
    const component = TestRenderer.create(<CardContainer card={{}} handleAttributeSelection={() =>{}} status="" isClosed={true} isWinner={false} selectedAttribute="" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findAllByType(Card)).not.toBeNull();
    expect(component.root.findAllByType(SelectedAttribute)).not.toBeNull();
  });
});
