import React from 'react';
import Card from './Card';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardAttributeList from './CardAttributeList';
import TestRenderer from 'react-test-renderer';
 
jest.mock('./CardHeader', () => () => 'CardHeader');
jest.mock('./CardImage', () => () => 'CardImage');
jest.mock('./CardAttributeList', () => () => 'CardAttributeList');

describe('Card', () => {
  it('renders', () => {
    const component = TestRenderer.create(<Card isClosed={true} card={{}} handleAttributeSelection={() =>{}} status="" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({className: "card closed"}).children).toEqual([]);
       expect(component.root.findAllByType(CardHeader)).not.toBeNull();
       expect(component.root.findAllByType(CardImage)).not.toBeNull();
       expect(component.root.findAllByType(CardAttributeList)).not.toBeNull();
  });
});
