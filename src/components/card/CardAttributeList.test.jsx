import React from 'react';
import CardAttributeList from './CardAttributeList';
import CardAttributeRow from './CardAttributeRow';
import TestRenderer from 'react-test-renderer';

describe('CardAttributeList', () => {
  it('renders', () => {
    const component = TestRenderer.create(<CardAttributeList card={{}} handleAttributeSelection={() =>{}} status="" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
     const list = component.root.findAllByType(CardAttributeRow);
    expect(list.length).toEqual(6);
  });
});
